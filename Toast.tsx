"use client";
import { useEffect, useState, useSyncExternalStore } from "react";
import { ToastStores } from "@/components/stores/ToastStore";
import ColorTypes from "@/components/functions/ColorTypes";
import ToastMessage from "@/types/ToastMessage";

const ToastElement = ({ message }: { message: ToastMessage }) => {
	const [animation, setAnimation] = useState("animate-bounceFromBottom");
	const [destroy, setDestroy] = useState(false);
	const [localMessage, setLocalMessage] = useState(message);

	setTimeout(() => {
		setAnimation("animate-bounceToBottom");
	}, 5000);

	setTimeout(() => {
		setDestroy(true);
	}, 5250);

	if (destroy) {
		return null;
	}

	return (
		<div
			className={`bg-slate-950 flex items-center gap-4 p-4 rounded-2xl shadow-lg mb-2 ${animation}`}
		>
			<div className={"w-12"}>
				<div className={"w-12"}>
					{localMessage && localMessage.icon && (
						<span
							className={`far fa-${localMessage.icon} ${localMessage.type === ColorTypes.danger
								? "text-red-500"
								: localMessage.type === ColorTypes.success
									? "text-lime-500"
									: "text-indigo-500"
								} text-4xl`}
						/>
					)}
				</div>
			</div>
			<div className={""}>
				{localMessage?.title && <div className={"text-sm text-slate-500 pb-4"}>{localMessage.title}</div>}
				{localMessage?.message && <div className={"text-slate-200 "}>{localMessage.message}</div>}
			</div>
		</div>
	);
};

const Toast = () => {
	const [messagesList, setMessagesList] = useState<ToastMessage[]>([]);

	let message: ToastMessage = useSyncExternalStore(
		ToastStores.subscribe,
		ToastStores.getSnapshot,
		ToastStores.getServerSnapshot
	) || null;

	useEffect(() => {
		if (message && message.title) {

			if (!messagesList.find((item) => item === message)) {
				setMessagesList([...messagesList, message]);
			}
			ToastStores.setToast({ message: "", title: "", type: ColorTypes.default, icon: "" });
		}
	}, [message, messagesList]);

	return (
		<div className={`fixed bottom-12 left-0 w-full md:w-96 md:left-2 md:bottom-2 z-50`}>
			{messagesList.map((item, index) => {
				return <ToastElement key={index} message={item} />;
			})}
		</div>
	);
};

export default Toast;
