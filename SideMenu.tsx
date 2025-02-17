"use client"
import { useSyncExternalStore } from "react";
import { MenuStores } from "@/components/stores/menuStore";
import Language from "@/locales/Language";
import { useEffect, useState } from "react";
import { AuthStores } from "./stores/AuthStore";

const SideMenu = () => {

	const [isAuthenticated, setIsAuthenticated] = useState(AuthStores.getSnapshot());
	const [isHydrated, setIsHydrated] = useState(false); 

	useEffect(() => {
		setIsHydrated(true);
	  const unsubscribe = AuthStores.subscribe(() => {
		setIsAuthenticated(AuthStores.getSnapshot());
	  });
  
	  return () => {
		unsubscribe();
	  };
	}, []);

	const open = useSyncExternalStore(MenuStores.subscribe, MenuStores.getSnapshot, MenuStores.getServerSnapshot);
	return (
		<aside className={`md:hidden transition-all duration-500 origin-top-right ease-slip w-screen h-screen p-4 fixed top-0 start-0 z-50 group ${open ? "menu-open scale-x-100 translate-y-0" : "scale-x-0 -translate-y-full"}  peer `}>
			<div className={"absolute top-0 start-0 w-full h-full bg-slate-900/10"} onClick={() => {
				MenuStores.setMenu(false)
			}}></div>
			<div className={"sticky w-3/4 bg-slate-900 z-10 h-auto p-4 rounded-xl shadow-2xl text-slate-900 text-center "}>
				<div className={"flex flex-col gap-4"}>
					<div className={""}>
						<a href={"/"}
							className={"flex flex-col gap-4 items-center justify-center bg-bg-gilace rounded-lg p-4  text-slate-50 active:scale-105 transition-all "}>
							<span className={"far fa-home text-4xl text-violet-300 opacity-70"}></span>
							<span>{Language().home}</span>
						</a>
					</div>
					<div className={"grid grid-cols-2 gap-4"}>
						<a href={"/solutions"}
							className={"flex flex-col gap-4 items-center justify-center bg-bg-gilace rounded-lg p-4  text-slate-50 active:scale-105 transition-all"}>
							<span className={"far fa-rocket text-4xl text-violet-300 opacity-70"}></span>
							<span>{Language().solutions}</span>
						</a>
						<a href={"/projects"}
							className={"flex flex-col gap-4 items-center justify-center bg-bg-gilace rounded-lg p-4  text-slate-50 active:scale-105 transition-all "}>
							<span className={"far fa-coffee text-4xl text-violet-300 opacity-70"}></span>
							<span>{Language().projects}</span>
						</a>
					</div>
					<div className={""}>
						<a href={"/auth"}
								className={"flex flex-col gap-4 items-center justify-center bg-bg-gilace rounded-lg p-4  text-slate-50 active:scale-105 transition-all "}>
								<span className={"far fa-user-crown text-4xl text-violet-300 opacity-70"}></span>
								<span>{isHydrated && isAuthenticated ? Language().profile : Language().login_to_panel}</span>
							</a>
					</div>
					<div className={"grid grid-cols-2 gap-4"}>
						<a href={"/about"}
							className={"flex flex-col gap-4 items-center justify-center bg-bg-gilace rounded-lg p-4  text-slate-50 active:scale-105 transition-all "}>
							<span className={"far fa-crown text-4xl text-violet-300 opacity-70"}></span>
							<span>{Language().about_us}</span>
						</a>
						<a href={"/contact"}
							className={"flex flex-col gap-4 items-center justify-center bg-bg-gilace rounded-lg p-4  text-slate-50 active:scale-105 transition-all "}>
							<span className={"far fa-phone text-4xl text-violet-300 opacity-70"}></span>
							<span>{Language().contact}</span>
						</a>
					</div>
					<div className={""}>
						<a href={"/blog"}
							className={"flex flex-col gap-4 items-center justify-center bg-bg-gilace rounded-lg p-4  text-slate-50 active:scale-105 transition-all "}>
							<span className={"far fa-blog text-4xl text-violet-300 opacity-70"}></span>
							<span>{Language().blog}</span>
						</a>
					</div>
				</div>
			</div>
			<div
				className={"absolute top-4 flex items-center justify-center end-4 w-10 h-10 bg-indigo-500 rounded-full text-white "}
				onClick={() => {
					MenuStores.setMenu(false)
				}}>
				<span className={"far fa-times"} />
			</div>
		</aside>
	)
}
export default SideMenu;