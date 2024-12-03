import Language from "@/locales/Language";
import Tab from "./Tab";
import Empty from "./Empty";
import Loader from "./Loader";
import { useEffect, useState } from "react";
import { getNotification } from "@/models/NotificationModel";

const NotificationBox = () => {
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState([]);
    const [all, setAll] = useState(1);
    const [page, setPage] = useState(0);

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
            console.error("Error fetching notifications:", error);
            setNotification([]);
        } finally {
            setLoading(false);
        }
    };

    // Effect to fetch notifications when `page` or `all` changes
    useEffect(() => {
        fetchNotifications();
    }, [page, all]);

    // Render notification items
    const NotificationSection = () => (
        <>
            {loading && <div>
                <br/>
                <br/>
                <Loader />
            </div>}
            {notification.length > 0 ? (
                <div className="flex flex-col gap-2">
                    {!loading && notification.map((item, index) => (
                        <div key={index} className="text-slate-300">
                            {item.type === "invoice-create" && (
                                <span className="text-slate-50">
                                    {Language().invoice} <span>{item.data.invoice_number}</span>
                                    {Language().to_price} <span>{item.data.total}</span> {Language().created}.
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                !loading && (
                    <div>
                        <Empty
                            frequency={0.9}
                            amplitude={18}
                            message={Language().no_notification}
                        />
                    </div>
                )
            )}
        </>
    );

    return (
        <div className="bg-slate-800 rounded-2xl p-4">
            <Tab
                headers={[
                    <div
                        key="unseen"
                        className="flex gap-2 cursor-pointer"
                        onClick={() => setAll(1)}
                    >
                        <span>{Language().unseen}</span>
                    </div>,
                    <div
                        key="archive"
                        className="flex gap-2 cursor-pointer"
                        onClick={() => setAll(0)}
                    >
                        <span>{Language().archive}</span>
                    </div>,
                ]}
                contents={[
                    <div key="unseen">
                        <NotificationSection />
                    </div>,
                    <div key="archive">
                        <NotificationSection />
                    </div>,
                ]}
            />
        </div>
    );
};

export default NotificationBox;
