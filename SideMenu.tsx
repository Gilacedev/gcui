"use client"
import {useState, useSyncExternalStore} from "react";
import {MenuStores} from "@/components/stores/menuStore";

const SideMenu = () => {
	const open = useSyncExternalStore(MenuStores.subscribe, MenuStores.getSnapshot, MenuStores.getServerSnapshot);
	return (
		<aside className={`transition-all duration-500 origin-top-right ease-slip w-screen h-screen p-4 fixed top-0 start-0 z-50 group ${open?"menu-open scale-x-100 translate-y-0":"scale-x-0 -translate-y-full"}  peer `}>
			<div className={"absolute top-0 start-0 w-full h-full bg-opacity-10 bg-slate-900" } onClick={()=>{
				MenuStores.setMenu(false)
			}}></div>
			<div className={"relative w-3/4 bg-slate-100 z-10 h-auto p-4 rounded-xl shadow-2xl text-slate-900 text-center "}>
				<div className={"flex flex-col gap-4"}>
					<div className={""}>
						<a href={"/"}
						   className={"flex flex-col gap-4 items-center justify-center border border-slate-300 rounded-lg p-4 text-slate-700 "}>
							<span className={"far fa-home text-4xl text-indigo-300"}></span>
							<span>خانه</span>
						</a>
					</div>
					<div className={"grid grid-cols-2 gap-4"}>
						<a href={"/"}
						   className={"flex flex-col gap-4 items-center justify-center border border-slate-300 rounded-lg p-4 text-slate-700 "}>
							<span className={"far fa-rocket text-4xl text-indigo-300"}></span>
							<span>راهکار ها</span>
						</a>
						<a href={"/"}
						   className={"flex flex-col gap-4 items-center justify-center border border-slate-300 rounded-lg p-4 text-slate-700 "}>
							<span className={"far fa-coffee text-4xl text-indigo-300"}></span>
							<span>پروژه های انجام شده</span>
						</a>
					</div>
					<div className={""}>
						<a href={"/"}
						   className={"flex flex-col gap-4 items-center justify-center border border-slate-300 rounded-lg p-4 text-slate-700 "}>
							<span className={"far fa-user-crown text-4xl text-indigo-500"}></span>
							<span>ورود به پنل</span>
						</a>
					</div>
					<div className={"grid grid-cols-2 gap-4"}>
						<a href={"/"}
						   className={"flex flex-col gap-4 items-center justify-center border border-slate-300 rounded-lg p-4 text-slate-700 "}>
							<span className={"far fa-crown text-4xl text-indigo-300"}></span>
							<span>در باره ما</span>
						</a>
						<a href={"/"}
						   className={"flex flex-col gap-4 items-center justify-center border border-slate-300 rounded-lg p-4 text-slate-700 "}>
							<span className={"far fa-phone text-4xl text-indigo-300"}></span>
							<span>تماس با ما</span>
						</a>
					</div>
					<div className={""}>
						<a href={"/"}
						   className={"flex flex-col gap-4 items-center justify-center border border-slate-300 rounded-lg p-4 text-slate-700 "}>
							<span className={"far fa-blog text-4xl text-indigo-300"}></span>
							<span>بلاگ</span>
						</a>
					</div>

				</div>
			</div>
			<div
				className={"absolute top-4 flex items-center justify-center group-[.menu-open]:animate-comeFromBottom transition-all delay-500  end-4 w-10 h-10 bg-indigo-500 rounded-full text-white "}
				onClick={() => {
					MenuStores.setMenu(false)
				}}>
				<span className={"far fa-times"}/>
			</div>
		</aside>
	)
}
export default SideMenu;