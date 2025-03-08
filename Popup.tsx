"use client";

import { useEffect, useState } from "react";
import Button from "./Button";
import Language from "@/locales/Language";
import Modal from "./Modal";
import Image from "./Image";


const Popup = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [doNotShowAgain, setDoNotShowAgain] = useState<boolean>(false);

    useEffect(() => {
        const modalState = localStorage.getItem("hidePopup");
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

    const lang = Language();

    return (
        <div className="relative z-50">
            <Modal open={isOpen} onClose={handleClose} name="modal-popup" zindex={50}>
                <div className="py-12 px-8 flex flex-col items-center justify-center">
                    <div className="py-4" />

                    <div className="flex flex-col items-center gap-2">
                        <Image src="" alt="" type="contain" />
                        <span className="font-bold text-white text-lg mt-2">جشنواره تخفیف بهاری</span>
                        <div className="flex items-center mt-4 gap-1">
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
                        <div className="flex justify-center items-center w-full mt-5 cursor-pointer">
                            <Button type="button" onClick={handleClose}>
                                {lang.close}
                            </Button>
                        </div>
                    </div>



                </div>
            </Modal>
        </div>
    );
};

export default Popup;
