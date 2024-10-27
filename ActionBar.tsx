import Badge from "@/components/Badge";
import ColorTypes from "@/components/functions/ColorTypes";
import Language from "@/locales/Language";
import ActionBarBasket from "@/components/ActionBarBasket";

const ActionBar = () => {
	const language = Language("common");
	return (
		<div className={"fixed bottom-2 left-4 rounded-2xl w-[calc(100dvw-2rem)] bg-violet-900 bg-opacity-20 backdrop-blur-3xl h-16 text-slate-300 z-40"}>
			<ul className={"flex justify-stretch"}>
				<li className={"w-1/5 border-l border-slate-300 border-opacity-10"}>
					<a href={"/dashboard/businesses"}
					   className={"flex gap-2 flex-col items-center justify-center border-b-4 border-violet-400 h-16"}>
						<span className={"fa fa-briefcase text-violet-400"}></span>
						<span className={"text-sm"}>
							{language.businesses}
						</span>
					</a>
				</li>
				<li className={"w-1/5 border-l border-slate-300 border-opacity-10"}>
					<a href={"/dashboard/invoices"} className={"flex gap-2 flex-col items-center justify-center  h-16"}>
						<span className={"fa fa-credit-card text-slate-400"}></span>
						<span className={"text-sm"}>
							{language.invoices}
						</span>
					</a>
				</li>
				<li className={"w-1/5 border-l border-slate-300 border-opacity-10 relative"}>
					<ActionBarBasket />
				</li>
				<li className={"w-1/5 border-l border-slate-300 border-opacity-10 relative"}>
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
