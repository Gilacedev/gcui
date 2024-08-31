import Badge from "@/components/Badge";
import ColorTypes from "@/components/functions/ColorTypes";
import Language from "@/locales/Language";
const ActionBar = () => {
	const language = Language("common");
	console.log("language", language)
	return (
		<div className={"fixed bottom-0 left-0 w-full bg-slate-200 h-16 text-slate-700 z-40"}>
			<ul className={"flex justify-stretch"}>
				<li className={"w-1/5 border-l border-slate-300"}>
					<a href={"/dashboard/businesses"}
					   className={"flex gap-2 flex-col items-center justify-center border-b-4 border-indigo-500 h-16"}>
						<span className={"fa fa-briefcase text-indigo-500"}></span>
						<span className={"text-sm"}>
							{language.businesses}
						</span>
					</a>
				</li>
				<li className={"w-1/5 border-l border-slate-300"}>
					<a href={"/dashboard/invoices"} className={"flex gap-2 flex-col items-center justify-center  h-16"}>
						<span className={"fa fa-credit-card text-slate-400"}></span>
						<span className={"text-sm"}>
							{language.invoices}
						</span>
					</a>
				</li>
				<li className={"w-1/5 border-l border-slate-300 relative"}>
					<a href={"/dashboard/invoices"} className={"flex gap-2 flex-col items-center justify-center  h-16"}>
						<span className={"fa fa-shopping-basket-alt text-slate-400"}></span>
						<span className={"text-sm"}>
							{language.order_basket}
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
							{language.events}
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
							{language.support}
						</span>
					</a>
				</li>
			</ul>
		</div>
	)
}
export default ActionBar;
