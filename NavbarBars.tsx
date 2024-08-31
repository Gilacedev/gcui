"use client"
import {MenuStores} from "@/components/stores/menuStore";

const NavbarBars = () => {
	return (
		<span className={"far fa-bars text-2xl px-3 cursor-pointer"} onClick={()=>{
			MenuStores.setMenu(true)
		}}></span>
	)
}
export default NavbarBars;
