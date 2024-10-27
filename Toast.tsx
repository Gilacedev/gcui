"use client"
import {useEffect, useState, useSyncExternalStore} from "react";
import {ToastStores} from "@/components/stores/ToastStore";
import ColorTypes from "@/components/functions/ColorTypes";

type ToastProps = {
	message: string,
	title: string,
	type:ColorTypes,
	icon: string
} | {}
const ToastElement = ({message}) => {
	const [animation, setAnimation] = useState("animate-bounceFromBottom");
	const [destroy, setDestroy] = useState(false);
	const [localMessage, setLocalMessage] = useState(message);
	setTimeout(() => {
		setAnimation("animate-bounceToBottom")
	}, 5000)
	setTimeout(() => {
		setDestroy(true)
	},5250)
	if (destroy) {
		return null;
	}
	return (
		<div className={`bg-slate-900 flex items-center gap-4 p-4 rounded-2xl shadow-lg mb-2 ${animation}`}>
			<div className={"w-12"}>
						<span className={`far fa-${localMessage.icon} ${
							localMessage.type === ColorTypes.danger ? "text-red-500" : localMessage.type === ColorTypes.success ? "text-green-500" : "text-indigo-500"
						} text-4xl`}/>
			</div>
			<div className={""}>
				<div className={"text-sm text-slate-500 pb-4"}>
					{localMessage.title}
				</div>
				<div className={"text-slate-200 "}>
					{localMessage.message}
				</div>
			</div>
		</div>
	)
}
const Toast = () => {
	const [messagesList, setMessagesList] = useState([]);
	let message: ToastProps = useSyncExternalStore(ToastStores.subscribe, ToastStores.getSnapshot, ToastStores.getServerSnapshot);
	useEffect(()=>{
		if (message.title) {
			if (!messagesList.find((item) => item === message)) {
				setMessagesList([...messagesList, message])
			}
			ToastStores.setToast({});
		}
	},[message])

	return (
		<div className={`fixed bottom-12 left-0 w-full md:w-96 md:left-2 md:bottom-2 z-50`}>
			{
				messagesList.map((item, index) => {
					return (
						<ToastElement key={index} message={item}/>
					)
				})
			}
		</div>
	)

}
export default Toast;