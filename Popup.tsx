"use client";

import { useEffect, useState } from "react";
import Button from "./Button";
import Language from "@/locales/Language";
import Modal from "./Modal";
import Image from "./Image";
import ContentType from "@/types/ContentType";
import { useRouter } from "next/navigation";

type PopupProps = {
    popups: ContentType;
};

const Popup: React.FC<PopupProps> = ({ popups }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [doNotShowAgain, setDoNotShowAgain] = useState<boolean>(false);
    const [currentPopup, setCurrentPopup] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        const contents = popups?.contents ?? [];
        const hiddenPopups = JSON.parse(localStorage.getItem("hiddenPopups") || "[]");
        const firstActivePopup = contents.find(popup => popup?._status === 1 && !hiddenPopups.includes(popup.id));

        if (firstActivePopup) {
            setCurrentPopup(firstActivePopup);
            setTimeout(() => {
                setIsOpen(true);
            }, 1000);
        }
    }, [popups]);


    const handleClose = () => {
        if (doNotShowAgain && currentPopup) {
            const hiddenPopups = JSON.parse(localStorage.getItem("hiddenPopups") || "[]");
            hiddenPopups.push(currentPopup.id);
            localStorage.setItem("hiddenPopups", JSON.stringify(hiddenPopups));
        }
        setIsOpen(false);
    };

    const lang = Language();

    const handleNavigate = () => {
        if (currentPopup) {
            const hiddenPopups = JSON.parse(localStorage.getItem("hiddenPopups") || "[]");
            if (!hiddenPopups.includes(currentPopup.id)) {
                hiddenPopups.push(currentPopup.id);
                localStorage.setItem("hiddenPopups", JSON.stringify(hiddenPopups));
            }
            router.push(`/${currentPopup.slug}`);
        }
    };

    return (
        <div className="relative z-50">
            {currentPopup && (
                <Modal open={isOpen} onClose={handleClose} name="modal-popup" zindex={50}>
                    <div className="py-5 flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center gap-2">
                            <div onClick={handleNavigate} className="cursor-pointer rounded-md lg:w-96 w-64">
                                {currentPopup.avatar && (
                                    <Image src={process.env.NEXT_PUBLIC_UPLOAD_URL + "/" + currentPopup.avatar}
                                        alt={currentPopup.title} type="cover" />
                                )}
                            </div>
                            <span onClick={handleNavigate} className="cursor-pointer font-bold text-white text-lg mt-2">
                                {currentPopup.title}
                            </span>
                            {currentPopup.short_description != "" &&
                                <span onClick={handleNavigate} className=" text-slate-400 cursor-pointer text-sm mt-2">
                                    {currentPopup.short_description}
                                </span>}
                            <div className="flex items-center mt-2 gap-1">
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
                            <div className="flex justify-center items-center w-full mt-2 cursor-pointer">
                                <Button color="default" type="button" onClick={handleClose}>
                                    {lang.close}
                                </Button>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Popup;
