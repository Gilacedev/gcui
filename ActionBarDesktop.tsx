"use client"
import { useSyncExternalStore } from "react";
import { AuthStores } from "@/components/stores/AuthStore";
import MenuBasketButton from "@/components/MenuBasketButton";
import Button from "@/components/Button";
import ColorTypes from "@/components/functions/ColorTypes";
import Badge from "@/components/Badge";
import Language from "@/locales/Language";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ActionBarDesktop = () => {
	const authStatus = useSyncExternalStore(AuthStores.subscribe, AuthStores.getSnapshot, AuthStores.getServerSnapshot);
	const router = useRouter();

	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		return null;
	}

	return (
		<div className={"flex gap-2"}>
			{authStatus && (
				<div className={"flex gap-2"}>
					<MenuBasketButton />
					<div className={"relative"}>
						<Button color={ColorTypes.default} tag={"a"} href={"/logout"} icon={<span className={"far fa-bell"} />} />
						<div className={"absolute -top-2  left-1/2  "}>
							<Badge color={ColorTypes.danger}>3</Badge>
						</div>
					</div>
					<div>
						<Button color={ColorTypes.default} onClick={() => {
							router.replace("/management")
						}} icon={<span className={"far fa-user-gear"} />} />
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
}

export default ActionBarDesktop;
