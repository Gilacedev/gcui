import Image from "@/components/Image";
import Language from "@/locales/Language";
import Blocks from "@/components/Blocks";
import SettingType from "@/types/Setting";
import Menu from "@/types/Menu";

type FooterProps = {
	settings: SettingType[];
	menu: Menu;
	namads?: any;
}

const Footer: React.FC<FooterProps> = ({ settings, menu }) => {

	let footerMenu = []
	let footerMenuTitle = ""
	if (menu) {
		try {
			// Ensure menu.meta is a string before parsing
			if (typeof menu.meta === 'string') {
				let data = JSON.parse(menu.meta);
				footerMenu = data.menu;
				footerMenuTitle = menu.title ?? "";
			} else {
				console.error("menu.meta is not a valid string");
			}
		}

		catch (e) {
			console.error("Footer menu error", e)
		}
	}

	return (
		<div>
			<Blocks.Dark className={"py-8 lg:pb-8 pb-14"}>
				<div className={"container mx-auto p-4"}>
					<div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"}>
						<div className={"flex items-center gap-2 flex-wrap"}>
							<div className={"w-20"}>
								<Image type={'contain'} src={"/assets/images/gilace-logo.svg"}
									alt={"gilace logo"} />
							</div>
							<div>
								<div className={"font-bold text-3xl"}>
									{settings.find((setting) => setting?.name == "footer_site_name")?.value}
								</div>
								<div className={"text-slate-700"}>
									{settings.find((setting) => setting?.name == "footer_site_slogan")?.value}
								</div>
							</div>
							<div className={"w-full text-sm text-slate-500"}>
								{settings.find((setting) => setting?.name == "footer_description")?.value}
							</div>

						</div>
						<div>
							<h2 className={"text-violet-400 font-bold"}>
								{
									footerMenuTitle
								}
							</h2>
							<ul className={"text-sm py-4 text-slate-500"}>
								{
									footerMenu && footerMenu.length > 0 && footerMenu.map((item: Menu) => {
										if (item) {
											return (
												<li className={"py-1"} key={item.id}>
													<a href={item.url ?? "#"} className={"flex items-center cursor-pointer hover:ps-2 transition-all"}>
														<span className={`text-indigo-500 fa-${item.icon ?? "chevron-left"} fa`}></span>
														<span className={"ps-1"}>
															{item.title}
														</span>
													</a>
												</li>
											)
										}
									})
								}
							</ul>
						</div>
						<div>

						</div>
						<div>
							<h2 className={"text-violet-400 font-bold"}>
								{Language().follow_us}
							</h2>
							<ul className={"text-sm py-4 text-slate-500 flex gap-4"}>
								<li>
									{
										<a target={"_blank"} href={settings.find((setting) => setting?.name == "instagram")?.value}>
											<span className={"fa fab fa-instagram text-3xl"} />
										</a>
									}
								</li>
								<li>
									{
										<a target={"_blank"} href={settings.find((setting) => setting?.name == "telegram")?.value}>
											<span className={"fa fab fa-telegram text-3xl"} />
										</a>
									}
								</li>
								<li>
									{
										<a target={"_blank"}
											href={settings.find((setting) => setting?.name == "whatsapp")?.value}>
											<span className={"fa fab fa-whatsapp text-3xl"} />
										</a>
									}
								</li>
								<li>
									{
										<a target={"_blank"}
											href={settings.find((setting) => setting?.name == "youtube")?.value}>
											<span className={"fa fab fa-youtube text-3xl"} />
										</a>
									}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Blocks.Dark>
		</div>
	);
}
export default Footer
