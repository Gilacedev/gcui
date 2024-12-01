"use client";
import { useSyncExternalStore } from "react";
import { AuthStores } from "@/components/stores/AuthStore";
import MenuBasketButton from "@/components/MenuBasketButton";
import Button from "@/components/Button";
import ColorTypes from "@/components/functions/ColorTypes";
import Badge from "@/components/Badge";
import Language from "@/locales/Language";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import NotificationBox from "./NotificationBox";

const ActionBarDesktop = () => {
  const authStatus = useSyncExternalStore(
    AuthStores.subscribe,
    AuthStores.getSnapshot,
    AuthStores.getServerSnapshot
  );
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const [isClient, setIsClient] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className={"flex gap-2"}>
      {authStatus && (
        <div className={"flex gap-2"}>
          <MenuBasketButton />
          <div className={"relative"} ref={menuRef}>
            <Button
              color={ColorTypes.default}
              tag={"button"}
              onClick={toggleMenu}
              icon={<span className={"far fa-bell"} />}
            />
            <div className={"absolute -top-2 left-1/2"}>
              <Badge color={ColorTypes.danger}>3</Badge>
            </div>
            {isOpen && (
              <div
                className={`absolute left-0 top-12 w-64 shadow-lg rounded-lg bg-opacity-100 transition-all duration-500 ease-out transform ${
                  isOpen
                    ? "scale-100 opacity-100"
                    : "scale-90 opacity-0"
                }`}
              >
               <NotificationBox/>
              </div>
            )}
          </div>
          <div>
            <Button
              color={ColorTypes.default}
              onClick={() => {
                router.replace("/management");
              }}
              icon={<span className={"far fa-user-gear"} />}
            />
          </div>
        </div>
      )}

      {!authStatus && (
        <div>
          <Button color={ColorTypes.primary} tag={"a"} href={"/auth"}>
            <span>{Language().login_to_panel}</span>
            <span className={"far fa-users ms-2"} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ActionBarDesktop;
