import { useEffect, useState, useSyncExternalStore } from "react";
import Language from "@/locales/Language";
import Tab from "./Tab";
import Empty from "./Empty";
import Loader from "./Loader";
import { getNotification, doReadNotification } from "@/models/NotificationModel";
import Button from "./Button";
import ColorTypes from "./functions/ColorTypes";
import { AuthStores } from "./stores/AuthStore";
import Notification from "@/types/Notification";

type NotificationBoxProps =  {
  isOpen: boolean;
}

const NotificationBox: React.FC<NotificationBoxProps> = ({ isOpen }) => {
  const [loading, setLoading] = useState(false);
  const [authStatus, setAuthStatus] = useState(false);
  const [notification, setNotification] = useState<Notification[]>([]);
  const [all, setAll] = useState(0);
  const [expStatus, setExpStatus] = useState<string | undefined>();
  const [page, setPage] = useState(0);

  const auth = useSyncExternalStore(
    AuthStores.subscribe,
    AuthStores.getSnapshot,
    AuthStores.getServerSnapshot
  );

  useEffect(() => {
    setAuthStatus(auth);
  }, [auth]);

  // Fetch notifications
  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const dbNotif = await getNotification(page, all);
      if (dbNotif?.data) {
        setNotification(dbNotif.data);
      } else {
        setNotification([]);
      }
    } catch (error) {
      setNotification([]);
    } finally {
      setLoading(false);
    }
  };

  // Effect to fetch notifications when `page` or `all` changes
  useEffect(() => {
    setNotification([]);
    if (auth) {
      fetchNotifications();
    }
  }, [page, all, auth]);

  const DoRead = async () => {
    try {
      await doReadNotification();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isOpen && all === 0 && notification.length > 0) {
      DoRead();
    }
  }, [isOpen, notification, all]);

  const NotificationItem = ({ item, keyProp }: { item: any; keyProp: string }) => {
    useEffect(() => {
      const expired = new Date(item.expired_at);
      let status = "pending";
      let days_remained = Math.floor((expired.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
      if (days_remained < 0) {
        status = "expired";
      }
      setExpStatus(status);
    }, [item]);

    return (
      <div className="border-b border-slate-700 p-1 py-2">
        <div className="text-slate-300 flex items-center justify-between">
          <div className="flex gap-2 items-center justify-center">
            <div className="bg-orange-300 rounded-xl flex items-center justify-center p-2">
              <span className="far fa-credit-card text-sm font-light text-slate-50"></span>
            </div>
            {item.type === "invoice-create" && (
              <span className="text-slate-300 font-light text-sm leading-6">
                {Language().invoice} <span className="text-base font-medium">{item.data.invoice_number}</span> {Language().to_price}{" "}
                <span className="text-base font-medium">{Intl.NumberFormat().format(item.data.total)}</span> {Language()["price_unit"]}{" "}
                {Language().created}.
              </span>
            )}
          </div>
          {keyProp === "unseen" && (
            <div className="w-4 h-3 bg-indigo-500 shadow-indigo-500 shadow-lg rounded-full"></div>
          )}
        </div>
        {expStatus !== "expired" && (
          <div className="flex justify-end w-full my-2">
            <Button color={ColorTypes.light} href={`/management/invoice/${item.data.invoice_number}`}>
              <span className={"block"}>{Language().pay}</span>
              <span className={"far fa-cart-shopping text-slate-100"} />
            </Button>
          </div>
        )}
      </div>
    );
  };

  // Render notification items
  const NotificationSection = ({ keyProp }: { keyProp: string }) => (
    <>
      {loading && (
        <div>
          <br />
          <br />
          <Loader />
        </div>
      )}
      {notification.length > 0 ? (
        <div className="flex flex-col gap-2 max-h-[30dvh] overflow-y-auto">
          {!loading &&
            notification.map((item, index) => (
              <div key={index}>
                <NotificationItem keyProp={keyProp} item={item} />
              </div>
            ))}
        </div>
      ) : (
        !loading && (
          <div>
            <Empty frequency={0.9} amplitude={18} message={Language().no_notification} />
          </div>
        )
      )}
    </>
  );

  return (
    <div
    className="bg-slate-900 rounded-2xl flex justify-center items-center p-2"
    onClick={(e) => e.stopPropagation()}>
      <Tab
        headers={[
          <div key="unseen" className="flex gap-2 cursor-pointer" onClick={() => setAll(0)}>
            <span>{Language().unseen}</span>
          </div>,
          <div key="archive" className="flex gap-2 cursor-pointer" onClick={() => setAll(1)}>
            <span>{Language().archive}</span>
          </div>,
        ]}
        contents={[
          <div key="unseen">
            <NotificationSection keyProp={"unseen"} />
          </div>,
          <div key="archive">
            <NotificationSection keyProp={"archive"} />
          </div>,
        ]}
      />
    </div>
  );
};

export default NotificationBox;
