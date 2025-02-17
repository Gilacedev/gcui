"use client"

import {useSyncExternalStore} from "react";
import {MenuStores} from "@/components/stores/menuStore";

const SideMenuPeer = () => {
	const open = useSyncExternalStore(MenuStores.subscribe, MenuStores.getSnapshot, MenuStores.getServerSnapshot);
	return (
		<div className={`peer ${open?"menu-open":""}`} />
	)

}
export default SideMenuPeer;