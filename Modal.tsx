'use client';
import React, { useEffect, useState } from "react";
import { Delay } from "./functions/Delay";
import { usePathname } from "next/navigation";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  name: string;
  zindex?: number;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children, name, zindex = 30 }) => {
  const [protectInitial, setProtectInitial] = useState(true);
  const [modalOpen, setModalOpen] = useState(open);
  const [modalClass, setModalClass] = useState("hidden");
  const pathname = usePathname(); // Listen to route changes

  useEffect(() => {
    if (protectInitial) {
      setTimeout(() => {
        setProtectInitial(false);
      }, 300);
    }
  }, []);

  useEffect(() => {
    setModalOpen(open);
  }, [open]);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
      setModalClass("show");
    } else {
      document.body.style.overflow = "scroll";
      closeAction();
    }
  }, [modalOpen]);

  // Close modal on route change
  useEffect(() => {
    if (modalOpen) {
      setModalOpen(false);
    }
  }, [pathname]); // Close the modal when the route changes

  const closeAction = async () => {
    setModalClass("hiding");
    await Delay(10);
    if (typeof onClose === "function") {
      onClose();
    }
    await Delay(280);
    setModalClass("hidden");
  };

  return (
    <div id={`modal-${name}`} className={protectInitial ? "hidden" : ""}>
      <div
        className={`modal fixed group w-full h-full top-0 left-0 z-${zindex} ${
          modalClass === "show" ? "show " : ""
        } ${modalClass === "hidden" ? "hidden" : ""} ${
          modalClass === "hiding" ? "hiding" : ""
        }`}
      >
        <div className="flex h-full items-center justify-center">
          <div
            onDrag={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
            className="group-[.show]:animate-(--animate-come-from-bottom) group-[.hiding]:animate-(--animate-go-to-bottom) flex items-center justify-center relative z-10 bg-slate-900 rounded-2xl w-[calc(100vw-20px)] sm:w-1/3"
          >
            <div className="relative w-full max-h-[calc(100dvh-20px)]">
              <div
                className="absolute fa fa-times p-3 left-0 top-0 text-slate-50 opacity-40 z-10 cursor-pointer"
                onClick={closeAction}
              />
              <div className="max-h-[calc(100dvh-20px)] overflow-y-scroll">
                {children}
              </div>
            </div>
          </div>
          <div
            onClick={closeAction}
            className="group-[.show]:animate-(--animate-fade-in) group-[.hiding]:animate-(--animate-fade-out) absolute top-0 left-0 w-full h-full backdrop-blur-3xl bg-black/10"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
