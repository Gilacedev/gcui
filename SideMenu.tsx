"use client"
import { useSyncExternalStore } from "react";
import { MenuStores } from "@/components/stores/menuStore";
import Language from "@/locales/Language";
import { useEffect, useState } from "react";
import { AuthStores } from "./stores/AuthStore";
import User from "@/types/User";
import { getProfile } from "@/models/AuthModel";
import Loader from "./Loader";
import AvatarBox from "./AvatarBox";
import Image from "next/image";
import Link from "next/link";
import gclubicon from '../public/assets/images/gclub-menu-icon.png';
import barcodeicon from '../public/assets/images/barcode-menu-icon.png';
import smsicon from '../public/assets/images/message-menu-icon.png';
import aimodicon from '../public/assets/images/ai-menu-icon.png';

const SideMenu = () => {

	const [isAuthenticated, setIsAuthenticated] = useState(AuthStores.getSnapshot());
	const [isHydrated, setIsHydrated] = useState(false);
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState<User>();

	useEffect(() => {
		setIsHydrated(true);
		const unsubscribe = AuthStores.subscribe(() => {
			setIsAuthenticated(AuthStores.getSnapshot());
			if (AuthStores.getSnapshot()) {
				get();
			}
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const get = async () => {
		setLoading(true);
		const dbUser = await getProfile();
		if (dbUser !== null) {
			setUser(dbUser)
		}
		setLoading(false);
	}

	const open = useSyncExternalStore(MenuStores.subscribe, MenuStores.getSnapshot, MenuStores.getServerSnapshot);
	return (
		<aside className={`md:hidden transition-all duration-500 origin-top-right ease-slip w-screen h-screen p-4 fixed top-0 start-0 z-50 group ${open ? "menu-open scale-x-100 translate-y-0" : "scale-x-0 -translate-y-full"}  peer `}>
			<div className={"absolute top-0 start-0 w-full h-full bg-slate-900/10"} onClick={() => {
				MenuStores.setMenu(false)
			}}></div>
			<div className={"sticky w-[70%] bg-slate-900 z-10 max-h-[95vh] overflow-y-auto p-5 py-6 rounded-xl shadow-2xl text-slate-900 text-center "}>
				<div className={"flex flex-col"}>
					{/* <div >
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
					<div >
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
					<div>
						<a href={"/blog"}
							className={"flex flex-col gap-4 items-center justify-center bg-bg-gilace rounded-lg p-4  text-slate-50 active:scale-105 transition-all "}>
							<span className={"far fa-blog text-4xl text-violet-300 opacity-70"}></span>
							<span>{Language().blog}</span>
						</a>
					</div> */}
					<div className="flex flex-col justify-center gap-2 items-center">
						<div className="rounded-full w-20 h-20">
							{
								isHydrated && isAuthenticated ? <div>
									{user && <AvatarBox type={"square"} name={"avatar"} formAvatar={user.avatar ? process.env.NEXT_PUBLIC_UPLOAD_URL + "/" + user.avatar : ""} realsize={true} />}
								</div>
									:
									<Link href={"/"} className={"relative w-full h-full"}>
										<Image
											layout="intrinsic"
											objectFit="contain"
											src={"/assets/images/gilace-logo.svg"}
											alt={"gilace logo"}
											width={200}
											height={80}
										/>
										<span className={"absolute hidden top-40"}>گیلاس</span>
									</Link>
							}
						</div>
						<Link href={"/auth"}>
							<span className="text-indigo-700 border-b  text-sm font-medium">
								{loading ? <Loader /> : isHydrated && isAuthenticated ? user?.name : Language().login}
							</span>
						</Link>
						<Link href={"/auth"}>
							<span className="text-slate-400  text-xs font-base ">
								{loading ? <Loader /> : isHydrated && isAuthenticated ? user?.username : Language().do_login}
							</span>
						</Link>
					</div>
					<div className="bg-slate-800 rounded-4xl p-5 grid grid-cols-2 mt-8 justify-center items-center gap-4">
						<Link href={isHydrated && isAuthenticated ? '' : "/auth"}>
							<div className="w-18 h-18 rounded-full flex justify-center items-center bg-slate-950 m-auto">
								<span className="far fa-user-cog  text-2xl text-indigo-700">
								</span>
							</div>
						</Link>
						<Link href={'/'}>
							<div className="w-18 h-18 rounded-full flex justify-center items-center bg-slate-200 m-auto">
								<span className="far fa-home text-2xl text-indigo-700">
								</span>
							</div>
						</Link>
						<Link href={'/about'}>
							<div className="w-18 h-18 rounded-full flex justify-center items-center bg-slate-950 m-auto">
								<span className="far fa-people-group text-2xl text-indigo-700">
								</span>
							</div>
						</Link>
						<Link href={'/contact'}>
							<div className="w-18 h-18 rounded-full flex justify-center items-center bg-slate-950 m-auto">
								<span className="far fa-phone text-2xl text-indigo-700">
								</span>
							</div>
						</Link>
					</div>
					<Link href={"/blog"}>
						<div className="text-slate-200 bg-slate-800 rounded-4xl p-3 flex mt-3 justify-center items-center gap-2">
							<i className="fa-solid fa-blog "></i>
							<span className="tetx-sm font-semibold">{Language().blog}</span>
						</div>
					</Link>
					<Link href={"/solutions"}>
						<div className="text-slate-200 bg-slate-800 rounded-4xl p-3 flex mt-3 justify-center items-center gap-2">
							<i className="far fa-lightbulb-on "></i>
							<span className="tetx-sm font-semibold">{Language().solutions}</span>
						</div>
					</Link>
					<Link href={"/projects"}>
						<div className="text-slate-200 bg-slate-800 rounded-4xl p-3 flex mt-3 justify-center items-center gap-2">
							<i className="far fa-diamond "></i>
							<span className="tetx-sm font-semibold">{Language().projects}</span>
						</div>
					</Link>
					<div className=" grid grid-cols-2 mt-8 justify-center items-center gap-3">

						<div className="bg-slate-800 rounded-3xl justify-center items-center w-24 h-24 flex flex-col gap-4">
							<Image src={gclubicon} alt="gclub" />
							<span className="text-slate-200 text-sm font-medium">
								G-CLUB
							</span>
						</div>
						<div className="bg-slate-800 rounded-3xl w-24 h-24 flex justify-center items-center flex-col gap-4">
							<Image src={aimodicon} alt="aimod" />
							<span className="text-slate-200 text-sm font-medium">
								Ai Mod
							</span>
						</div>

						<div className="bg-slate-800 rounded-3xl justify-center items-center w-24 h-24 flex flex-col gap-4">
							<Image src={barcodeicon} alt="gshape" />
							<span className="text-slate-200 text-sm font-medium">
								SMS panel
							</span>
						</div>
						<div className="bg-slate-800 rounded-3xl justify-center items-center w-24 h-24 flex flex-col gap-4">
							<Image src={smsicon} alt="smsPanel" />
							<span className="text-slate-200 text-sm font-medium">
								G-Shape
							</span>
						</div>
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