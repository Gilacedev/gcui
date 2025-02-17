"use client";
import { usePathname, useRouter } from "next/navigation";
import Badge from "@/components/Badge";
import ColorTypes from "@/components/functions/ColorTypes";
import Language from "@/locales/Language";
import ActionBarBasket from "@/components/ActionBarBasket";
import { useEffect, useState, useRef, useSyncExternalStore } from "react";
import { AuthStores } from "./stores/AuthStore";
import NotificationBox from "./NotificationBox";
import TransitionLink from "@/components/TransitionLink";
import { getNotificationCount } from "@/models/NotificationModel";

const ActionBar = () => {
  const language = Language("common");
  const currentPath = usePathname();
  const [authStatus, setAuthStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const notifRef = useRef<HTMLLIElement | null>(null);
  const auth = useSyncExternalStore(
    AuthStores.subscribe,
    AuthStores.getSnapshot,
    AuthStores.getServerSnapshot
  );

  const fetchNotificationCount = async () => {
    setLoading(true);
    try {
      const dbNotif = await getNotificationCount();
      if (dbNotif !== null) {
        setNotificationCount(parseInt(dbNotif));
      }
    } catch (error) {
      console.error("Failed to fetch notification count:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (auth) {
      fetchNotificationCount();
      // Set an interval to fetch notifications every 5 minutes
      const intervalId = setInterval(() => {
        fetchNotificationCount();
      }, 300000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [auth]);

  useEffect(() => {
    setAuthStatus(auth);
  }, [auth]);

  const handleToggleNotif = () => {
    setIsNotifOpen((prev) => !prev);
  };

  // Handle click outside to close the notification submenu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setIsNotifOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close notification submenu when the path changes
  useEffect(() => {
    setIsNotifOpen(false);
  }, [currentPath]); // Detects path changes using `usePathname`

  if (authStatus) {
    return (
      <div className="fixed bottom-2 left-4 rounded-2xl w-[calc(100dvw-2rem)] bg-violet-900/20 backdrop-blur-3xl h-16 text-slate-300 z-40">
        <ul className="grid grid-cols-5">
          <li>
            <TransitionLink
              href={"/management/business"}
              className={`flex gap-2 flex-col items-center justify-center h-16 ${
                currentPath === "/management/business" ? "border-b-4 border-violet-400" : ""
              }`}
            >
              <span
                className={`fa fa-briefcase ${
                  currentPath === "/management/business" ? "text-violet-400" : "text-slate-400"
                }`}
              />
              <span className="text-xs">{language.businesses}</span>
            </TransitionLink>
          </li>
          <li>
            <TransitionLink
              href={"/management/invoice"}
              className={`flex gap-2 flex-col items-center justify-center h-16 ${
                currentPath === "/management/invoice" ? "border-b-4 border-violet-400" : ""
              }`}
            >
              <span
                className={`fa fa-credit-card ${
                  currentPath === "/management/invoice" ? "text-violet-400" : "text-slate-400"
                }`}
              />
              <span className="text-xs">{language.invoices}</span>
            </TransitionLink>
          </li>
          <li
            className={"relative"}
            onClick={(e) => {
              e.preventDefault();
              handleToggleNotif();
            }}
            ref={notifRef}
          >
            <div
              className={`flex gap-2 flex-col items-center justify-center h-16 ${
                isNotifOpen ? "border-b-4 border-violet-400" : ""
              }`}
            >
              <span className={`fa fa-bell text-slate-400`} />
              <span className="text-xs">{language.events}</span>
            </div>

            <div
              className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 w-72 rounded-lg transition-all duration-300 ease-out overflow-hidden ${
                isNotifOpen
                  ? "scale-100 opacity-100 translate-y-0"
                  : "scale-90 opacity-0 translate-y-8 pointer-events-none"
              }`}
            >
              <NotificationBox isOpen={isNotifOpen} />
            </div>
            {notificationCount > 0 && (
              <div className={"absolute top-0 right-0"}>
                <Badge color={ColorTypes.primary}>{notificationCount}</Badge>
              </div>
            )}
          </li>
          <li>
            <TransitionLink
              href={"/management/ticket"}
              className={`flex gap-2 flex-col items-center justify-center h-16 ${
                currentPath === "/management/ticket" ? "border-b-4 border-violet-400" : ""
              }`}
            >
              <span
                className={`fa fa-headset ${
                  currentPath === "/management/ticket" ? "text-violet-400" : "text-slate-400"
                }`}
              />
              <span className="text-xs">{language.support}</span>
            </TransitionLink>
          </li>
          <li className="relative">
            <ActionBarBasket />
          </li>
        </ul>
      </div>
    );
  } else {
    return <></>;
  }
};

export default ActionBar;
