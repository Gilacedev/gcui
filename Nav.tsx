import MenuItem from "./MenuItem";
import Button from "./Button";
import SearchForm from "./SearchForm";
import {AuthCheck} from "./functions/Auth";
import Badge from "./Badge";
import Device from "./functions/Device";
import ColorTypes from "./functions/ColorTypes.ts";
import Image from "./Image";


//just in development :
export const fetchCache = 'force-no-store'

type authBlockProps = {
	[Language: string]: any;
}

const AuthBlock =  ({Language}:authBlockProps) => {
	"use client";
	const isMobile = Device()
	const authStatus = AuthCheck();
	if (!authStatus) {
		return (
			<div>
				<Button color={ColorTypes.primary} tag={"a"} href={"/auth"}>
					{Language.login}
				</Button>
			</div>
		)
	}
	if(isMobile)
	{
		return (
			<div className={"flex gap-2"}>
				<div>
					<Button color={ColorTypes.default} tag={"a"} href={"/logout"} icon={<span className={"far fa-sign-out"}/>}/>
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
					<Badge color={ColorTypes.danger}  particular={true}>+99</Badge>
				</div>
			</div>
			<div className={"relative"}>
				<Button color={ColorTypes.default} tag={"a"} href={"/logout"} icon={<span className={"far fa-bell"}/>}/>
				<div className={"absolute -top-2  left-1/2  "}>
					<Badge color={ColorTypes.danger}>3</Badge>
				</div>
			</div>
			<div>
				<Button color={ColorTypes.default} tag={"a"} href={"/logout"} icon={<span className={"far fa-sign-out"}/>}/>
			</div>
		</div>
	)
}
const ActionBar = (Language: {[Language: string]: any}  ) => {
	return (
		<div className={"fixed bottom-0 left-0 w-full bg-slate-200 h-16 text-slate-700 z-40"}>
			<ul className={"flex justify-stretch"}>
				<li className={"w-1/5 border-l border-slate-300"}>
					<a href={"/dashboard/businesses"} className={"flex gap-2 flex-col items-center justify-center border-b-4 border-indigo-500 h-16"}>
						<span className={"fa fa-briefcase text-indigo-500"}></span>
						<span className={"text-sm"}>
							{Language.businesses}
						</span>
					</a>
				</li>
				<li className={"w-1/5 border-l border-slate-300"}>
					<a href={"/dashboard/invoices"} className={"flex gap-2 flex-col items-center justify-center  h-16"}>
						<span className={"fa fa-credit-card text-slate-400"}></span>
						<span className={"text-sm"}>
							{Language.invoices}
						</span>
					</a>
				</li>
				<li className={"w-1/5 border-l border-slate-300 relative"}>
					<a href={"/dashboard/invoices"} className={"flex gap-2 flex-col items-center justify-center  h-16"}>
						<span className={"fa fa-shopping-basket-alt text-slate-400"}></span>
						<span className={"text-sm"}>
							{Language.order_basket}
						</span>
					</a>
					<div className={"absolute -top-2 left-1/2 "}>
						<Badge color={ColorTypes.danger} particular={true}>+99</Badge>
					</div>
				</li>
				<li className={"w-1/5 border-l border-slate-300 relative"}>
					<a href={"/dashboard/invoices"} className={"flex gap-2 flex-col items-center justify-center  h-16"}>
						<span className={"fa fa-bell text-slate-400"}></span>
						<span className={"text-sm"}>
							{Language.events}
						</span>
					</a>
					<div className={"absolute -top-2 left-1/2 "}>
						<Badge color={ColorTypes.danger}>2</Badge>
					</div>

				</li>
				<li className={"w-1/5"}>
					<a href={"/dashboard/invoices"} className={"flex gap-2 flex-col items-center justify-center  h-16"}>
						<span className={"fa fa-headset text-slate-400"}></span>
						<span className={"text-sm"}>
							{Language.support}
						</span>
					</a>
				</li>
			</ul>
		</div>
	)
}
const Nav = async ({Language}:{ [Language: string]: any    }) => {
	const isMobile = await Device()
	if (isMobile)
	{
		return (
			<div>
				<div className={"flex bg-slate-900 h-16 w-screen"}>
					<div className={"flex justify-between items-center w-full px-2"}>
						<ul className={"flex gap-2 items-center"}>
							<li>
								<span className={"far fa-bars text-2xl px-3"}></span>
							</li>
							<li>
								<h1 className={"relative overflow-hidden"}>
									<a href={"/"} className={"relative h-12 w-auto"}>
										<Image type={'contain'} src={"./assets/images/gilace-logo.svg"} alt={"gilace logo"}/>
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
				<ActionBar language={Language}/>
			</div>
		);
	}
	return (
		<nav className={"flex gap-3 h-16"}>
			<h1 className={"overflow-hidden h-20 w-20"}>
				<a href={"/"} className={"relative h-20 w-auto"}>
					<Image type={"contain"} src={"./assets/images/gilace-logo.svg"} alt={"gilace logo"}/>
					<span className={"absolute top-40"}>
						گیلاس
					</span>
				</a>
			</h1>
			<div className={"flex justify-between h-16 w-full border-b border-slate-700 mt-2"}>
				<ul className={"flex items-center"}>
					<li className={"ms-2"}>
						<MenuItem title={Language.home!} icon={"far fa-home"} url={"/"} isActive={true}/>
					</li>
					<li className={"ms-2"}>
						<MenuItem title={Language?.solutions} icon={"far fa-rocket-launch"} url={"/solutions"}/>
					</li>
					<li className={"ms-2"}>
						<MenuItem title={Language?.projects} icon={"far fa-mug-saucer"} url={"/projects"}/>
					</li>
					<li className={"ms-2"}>
						<MenuItem title={Language?.about} icon={"far fa-crown"} url={"/about"}/>
					</li>
					<li className={"ms-2"}>
						<MenuItem title={Language?.contact} icon={"far fa-phone"} url={"/contact"}/>
					</li>
				</ul>
				<ul className={"flex items-center"}>
					<li>
						<AuthBlock Language={Language} />
					</li>
					<li className={"ms-2"}>
						<SearchForm/>
					</li>
				</ul>
			</div>

		</nav>
	)
}
export default Nav