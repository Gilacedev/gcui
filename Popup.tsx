"use client";

import { useEffect, useState } from "react";

import Button from "./Button";
import Language from "@/locales/Language";
import Modal from "./Modal";


const Popup = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [doNotShowAgain, setDoNotShowAgain] = useState<boolean>(false);

    useEffect(() => {
        const modalState = localStorage.getItem("hidePopup");
        console.log("modalState:::", modalState);
        
        if (modalState !== "true") {
            setTimeout(() => {
                setIsOpen(true);
            }, 100);
        }
    }, []);

    useEffect(() => {
        if (isOpen) {
            setShow(true);
        } else {
            setShow(false);
        }
    }, [isOpen]);

    const handleClose = () => {
        if (doNotShowAgain) {
            localStorage.setItem("hidePopup", "true");
        }
        setIsOpen(false);
    };

    if (!show) return null;

    const lang = Language(); 

    return (
        <Modal open={isOpen} onClose={handleClose} name="modal-popup" zindex={100}>
            <div className="py-12 px-8 flex flex-col items-center justify-center">
                <div className="py-4" />
                <div className="p-5">
                    <div className="flex flex-col items-center">
                        <span className="font-bold text-white text-lg">جشنواره تخفیف بهاری</span>
                        <span>توضیحات</span>
                    </div>
                    <div className="flex items-center mt-4">
                        <input
                            type="checkbox"
                            id="doNotShowAgain"
                            className="mr-2"
                            checked={doNotShowAgain}
                            onChange={(e) => setDoNotShowAgain(e.target.checked)}
                        />
                        <label htmlFor="doNotShowAgain" className="text-sm text-gray-200">
                            دیگر نمایش داده نشود
                        </label>
                    </div>
                    <div className="flex gap-2 p-4">
                        <Button type="button" onClick={handleClose}>
                            {lang.close}
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default Popup;
