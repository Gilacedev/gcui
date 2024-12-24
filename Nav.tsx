import MenuItem from "./MenuItem";
import Button from "./Button";
import SearchForm from "./SearchForm";
import ColorTypes from "./functions/ColorTypes"; 
import Image from "./Image";
import NavbarBars from "@/components/NavbarBars";
import ActionBarDesktop from "@/components/ActionBarDesktop";
import Device from "@/components/functions/Device";
import Link from "next/link";
import Menu from "@/types/Menu";

// Just in development:
export const fetchCache = 'force-no-store';

type authBlockProps = {
	[Language: string]: any;
};

type LanguageType = {
	[key: string]: string;
};

type NavProps = {
	Language: LanguageType;
	menu: Menu;
}
const AuthBlock = async () => {
	let isMobile = await Device();
	if (isMobile) {
		return (
			<div className={"flex gap-2"}>
				<div>
					<Button
						color={ColorTypes.default}
						tag={"a"}
						href={"/management"}
						icon={<span className={"far fa-user-gear"} />}
					/>
				</div>
			</div>
		);
	}
	return <ActionBarDesktop />;
};

const Nav = async ({ Language, menu }:NavProps) => {
	let isMobile = await Device();
	let menuItems: Menu[] = []; 
	let activeId = 1;
	try {
		if (typeof menu.meta === "string") {
			let data = JSON.parse(menu.meta);
			menuItems = data.menu;
		} else {
			console.warn("menu.meta is not a string:", menu.meta);
		}
	} catch (e) {
		console.error("Error parsing menu.meta:", e);
	}
	
	if (isMobile) {
		return (
			<div className={"container mx-auto z-20 sticky top-0"}>
				<div className={"flex h-16 w-screen"}>
					<div className={"flex justify-between items-center w-full px-2"}>
						<ul className={"flex gap-2 items-center"}>
							<li>
								<NavbarBars />
							</li>
							<li>
								<h1 className={"relative overflow-hidden"}>
									<a href={"/"} className={"relative h-12 w-12 block"}>
										<Image
											type={"contain"}
											src={"/assets/images/gilace-logo.svg"}
											alt={"gilace logo"}
										/>
										<span className={"absolute top-40"}>گیلاس</span>
									</a>
								</h1>
							</li>
						</ul>
						<ul className={"flex gap-2 items-center"}>
							<li>
								<AuthBlock />
							</li>
							<li className={"ms-2"}>
								<SearchForm />
							</li>
						</ul>
					</div>
				</div>
				<div className={"backdrop-blur-3xl v-mask w-full h-full absolute top-0 left-0 -z-10"} />
			</div>
		);
	}
	return (
		<div className={"container mx-auto z-20 sticky top-0"}>
			<nav className={"flex gap-3"}>
				<h1 className={"overflow-hidden h-20 w-20"}>
					<Link href={"/"} className={"relative h-20 w-auto"}>
						<Image type={"contain"} src={"/assets/images/gilace-logo.svg"} alt={"gilace logo"} />
						<span className={"absolute top-40"}>گیلاس</span>
					</Link>
				</h1>
				<div className={"flex justify-between h-16 w-full border-b border-slate-700 mt-2"}>
					<ul className={"flex items-center gap-2"}>
						{menuItems.map((item, index) => {
							return (
								<div key={item.id}>
									<MenuItem item={item} />
								</div>
							);
						})}
					</ul>
					<ul className={"flex items-center"}>
						<li>
							<AuthBlock  />
						</li>
						<li className={"ms-2"}>
							<SearchForm />
						</li>
					</ul>
				</div>
			</nav>
			<div className={"backdrop-blur-3xl v-mask w-full h-full absolute top-0 left-0 -z-10"} />
		</div>
	);
};
export default Nav;
