import MenuItem from "./MenuItem";
import Button from "./Button";
import SearchForm from "./SearchForm";
import {AuthCheck} from "./functions/Auth";
import Badge from "./Badge";
import Device from "./functions/Device";
import ColorTypes from "./functions/ColorTypes.ts";
import Image from "./Image";
import NavbarBars from "@/components/NavbarBars";
import Language from "@/locales/Language";


//just in development :
export const fetchCache = 'force-no-store'

type authBlockProps = {
	[Language: string]: any;
}

const AuthBlock = () => {
	"use client";
	const isMobile = Device()
	const authStatus = AuthCheck();
	if (!authStatus) {
		return (
			<div>
				<Button color={ColorTypes.primary} tag={"a"} href={"/auth"}>
					<span>{Language().login_to_panel}</span>
					<span className={"far fa-users ms-2"}/>
				</Button>
			</div>
		)
	}
	if (isMobile) {
		return (
			<div className={"flex gap-2"}>
				<div>
					<Button color={ColorTypes.default} tag={"a"} href={"/logout"}
							icon={<span className={"far fa-sign-out"}/>}/>
				</div>
			</div>
		)
	}
	return (
		<div className={"flex gap-2"}>
			<div className={"relative"}>
				<Button color={ColorTypes.default} tag={"a"} href={"/logout"}
						icon={<span className={"far fa-shopping-basket-alt"}/>}/>
				<div className={"absolute -top-2 left-1/2 "}>
					<Badge color={ColorTypes.danger} particular={true}>+99</Badge>
				</div>
			</div>
			<div className={"relative"}>
				<Button color={ColorTypes.default} tag={"a"} href={"/logout"} icon={<span className={"far fa-bell"}/>}/>
				<div className={"absolute -top-2  left-1/2  "}>
					<Badge color={ColorTypes.danger}>3</Badge>
				</div>
			</div>
			<div>
				<Button color={ColorTypes.default} tag={"a"} href={"/logout"}
						icon={<span className={"far fa-sign-out"}/>}/>
			</div>
		</div>
	)
}
const Nav = ({Language , menu }) => {
	const isMobile = Device()
	let menuItems = []
	let activeId = 1
	try {
		let data = JSON.parse(menu.meta)
		menuItems = data.menu
	}
	catch (e) {
		console.log(e)
	}
	if (isMobile) {
		return (
			<div className={"container mx-auto  z-20 sticky top-0"}>
				<div className={"flex h-16 w-screen"}>
					<div className={"flex justify-between items-center w-full px-2"}>
						<ul className={"flex gap-2 items-center"}>
							<li>
								<NavbarBars/>
							</li>
							<li>
								<h1 className={"relative overflow-hidden"}>
									<a href={"/"} className={"relative h-12 w-12 block"}>
										<Image type={'contain'} src={"/assets/images/gilace-logo.svg"}
											   alt={"gilace logo"}/>
										<span className={"absolute top-40"}>
											گیلاس
										</span>
									</a>

								</h1>
							</li>
						</ul>
						<ul className={"flex gap-2 items-center"}>
							<li>
								<AuthBlock Language={Language}/>
							</li>
							<li className={"ms-2"}>
								<SearchForm/>
							</li>
						</ul>
					</div>
				</div>
				<div className={"backdrop-blur-3xl v-mask  w-full h-full absolute top-0 left-0 -z-10"}/>

			</div>
		);
	}
	return (
		<div className={"container mx-auto  z-20 sticky top-0"}>
			<nav className={"flex gap-3 "}>
				<h1 className={"overflow-hidden h-20 w-20"}>
					<a href={"/"} className={"relative h-20 w-auto"}>
						<Image type={"contain"} src={"/assets/images/gilace-logo.svg"} alt={"gilace logo"}/>
						<span className={"absolute top-40"}>
							گیلاس
						</span>
					</a>
				</h1>
				<div className={"flex justify-between h-16 w-full border-b border-slate-700 mt-2"}>
					<ul className={"flex items-center gap-2"}>
						{menuItems.map((item, index) => {
							return (
								<div key={item.id}>
									<MenuItem  item={item}/>
								</div>
							)
						})}
					</ul>
					<ul className={"flex items-center"}>
						<li>
							<AuthBlock Language={Language}/>
						</li>
						<li className={"ms-2"}>
							<SearchForm/>
						</li>
					</ul>
				</div>
			</nav>
			<div className={"backdrop-blur-3xl v-mask w-full h-full absolute top-0 left-0 -z-10"}/>
		</div>
	)
}
export default Nav