import Image from "@/components/Image";
const Footer = ({settings , menu , namads}) => {
	let footerMenu = []
	let footerMenuTitle = ""
	try {
		let data = JSON.parse(menu.meta)
		footerMenu = data.menu
		footerMenuTitle = menu.title
	}
	catch (e) {
		console.error("Footer menu error", e)
	}

	return (
		<div>
			<div className={"bg-slate-300 text-slate-800"}>
				<div className={"container mx-auto p-4"}>
					<div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"}>
						<div className={"flex items-center gap-2 flex-wrap"}>
							<div className={"w-20"}>
								<Image type={'contain'} src={"./assets/images/gilace-logo.svg"}
									   alt={"gilace logo"}/>
							</div>
							<div>
								<div className={"font-bold text-3xl"}>
									{settings.find((setting)=>setting?.name=="footer_site_name")?.value }
								</div>
								<div className={""}>
									{settings.find((setting)=>setting?.name=="footer_site_slogan")?.value }
								</div>
							</div>
							<div className={"w-full text-sm text-slate-500"}>
								{settings.find((setting) => setting?.name == "footer_description")?.value}
							</div>
						</div>
						<div>
							<h2 className={"text-slate-800 font-bold"}>
								{
									footerMenuTitle
								}
							</h2>
							<ul className={"text-sm py-4 text-slate-500"}>
								{
									footerMenu && footerMenu.map((item, index) => {
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
									})
								}
							</ul>
						</div>
						<div>

						</div>
						<div>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Footer
