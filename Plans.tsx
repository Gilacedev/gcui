"use client"
import { useState } from "react";
import Language from "@/locales/Language";
import language from "@/locales/Language";
import { H1, Paragraph } from "@/components/Typo";
import Button from "@/components/Button";
import ColorTypes from "@/components/functions/ColorTypes";
import Add from "@/components/functions/Basket";
import { BasketStores } from "@/components/stores/BasketStore";
import Payable from "@/types/Payable";

interface PlansProps {
	plans: Payable[];
}
type metaType = {
	customStructure: any[];
	menu: any[]
}
function isMetaType(meta: any): meta is metaType {
	return meta && Array.isArray(meta.menu) && Array.isArray(meta.customStructure);
}
const Plans = ({plans}: { plans: Payable[] }) =>{

	const [activePlan, setActivePlan] = useState("monthly");
	let dbPlansMonthly: Payable[] = [];
	let dbPlansYearly: Payable[] = [];
	let dbPlansLifetime: Payable[] = [];
	if(!plans)
	{
		return ;
	}
	plans.map((item: Payable) => {
		if (!item) return;
		let itemMeta:any[] = [];

		try {
			if (typeof item.meta === "string") {
				const parsedMeta = JSON.parse(item.meta);
				itemMeta = parsedMeta.menu || [];
			}
			if (isMetaType(item.meta)) {
				itemMeta = item.meta.menu;
			}
		} catch (e) {
			console.error("Error parsing meta:", e);
		}
		console.log(itemMeta)
		item.checkList = itemMeta;

		if (item.duration === "monthly") {
			dbPlansMonthly.push(item);
		}
		if (item.duration === "yearly") {
			dbPlansYearly.push(item);
		}
		if (item.duration === "lifetime") {
			dbPlansLifetime.push(item);
		}
	});


	interface DurationSelectProps {
		duration: string;
		isActive: string;
	}

	const DurationSelect: React.FC<DurationSelectProps> = ({ duration, isActive }) => {
		return (
			<div
				onClick={() => {
					setActivePlan(duration)
				}}
				className={`box-border transition-all cursor-pointer bg-slate-900/50 p-4 rounded-xl mt-4 group ${isActive === duration ? "active border border-indigo-500" : ""}`}>
				<div>
					<div
						className={"transition-all duration-500 group-[.active]:bg-indigo-500 bg-slate-500 w-4 h-4 rounded-full inline-block me-2"}></div>
					{Language()[duration]}
				</div>
				<div className={"text-slate-400 text-sm"}>
					{Language()[`description_${duration}`]}
				</div>
			</div>
		)
	}
	const PlanItem: React.FC<{ item: Payable }> = ({ item }) => {
		if (!item) return;
		return (<div className={`bg-slate-950/20 p-4 rounded-xl flex flex-col gap-4 ${activePlan !== item.duration ? "hidden" : ""} ${item._featured ? "animate-onTheEarth" : "animate-dropDown"}`}>
			<div className={"text-center"}>
				<H1 element={"div"}>
					{item.title}
				</H1>
				<Paragraph element={"div"} className={"leading-8 text-sm text-slate-500 pt-4"}>
					<div dangerouslySetInnerHTML={{ __html: item.description }}></div>
				</Paragraph>
			</div>
			<div className={"flex-1 sm:min-h-[40dvh] text-slate-200"}>
				<div>
					{item.checkList && item.checkList.length>0 && item.checkList.map((item, index) => {
						return (
							<div key={index} className={"flex gap-2 items-center pb-4 leading-6"}>
								<span className={"far fa-check-circle text-indigo-500"}></span>
								<span className={"text-slate-400"}>
									{item.feature}
								</span>
							</div>
						)
					})}
				</div>
			</div>
			<div className={"font-light flex gap-1"}>
				<span className={"pe-2"}>
					{language()["duration"]}
				</span>:
				<span className={"text-violet-400"}>
					{language()[item.duration]}
				</span>
			</div>
			<div className={"flex justify-between items-center pt-4 border-t border-slate-700"}>
				<div>
					{
						item._freemium == 1 &&
						<div className={"text-indigo-500"}>
							<div>
								<span>
									{language()["freemium"]}
								</span>
								<span className={"text-slate-500 line-through"}>
									<span className={"pe-2"}>
										{Intl.NumberFormat().format(item.price)}
									</span>
									<span className={"text-sm "}>
										{language()["price_unit"]}
									</span>
								</span>
							</div>
							<div className={"text-sm text-slate-500"}>
								{language()["freemium_description"]}
							</div>
						</div>
					}
					{
						item._freemium == 0 &&
						<span className={"text-indigo-300"}>
							<span className={"text-lg font-bold pe-2"}>
								{Intl.NumberFormat().format(item.price)}
							</span>
							<span className={""}>
								{language()["price_unit"]}
							</span>
						</span>
					}
				</div>
				<div>
					{
						item._freemium == 0 && item.fake_price &&
						<span className={"text-slate-500 text-sm line-through"}>
							<span className={"pe-2"}>
								{Intl.NumberFormat().format(item.fake_price)}
							</span>
							<span className={""}>
								{language()["price_unit"]}
							</span>
						</span>
					}

				</div>
			</div>
			<div>
				<div className={"grid grid-cols-1"}>
					<Button particular={item._featured ? true : false} color={ColorTypes.primary} className={"!justify-center"} icon={<span className={"far fa-shopping-cart"}></span>} onClick={() => {
						//add to cart
						item.content_id && Add(item.id, item.content_id)
						BasketStores.setBasket(true)
					}}>
						<span>{language()["build_this_service"]}</span>
					</Button>
				</div>
			</div>
		</div>

		)
	}

	return (
		<div>
			<div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
				{
					dbPlansMonthly.length > 0 &&
					<DurationSelect duration={"monthly"} isActive={activePlan} />
				}
				{
					dbPlansYearly.length > 0 &&
					<DurationSelect duration={"yearly"} isActive={activePlan} />

				}
				{
					dbPlansLifetime.length > 0 &&
					<DurationSelect duration={"lifetime"} isActive={activePlan} />

				}
			</div>
			<div className={"mt-12"}>
				<div className={`grid grid-cols-1 md:grid-cols-${dbPlansMonthly.length > 0 ? 3 : 2} gap-4`}>
					{
						dbPlansMonthly.map((item, index) => {
							return (
								<PlanItem item={item} key={index} />
							)
						})
					}
					{
						dbPlansYearly.map((item, index) => {
							return (
								<PlanItem item={item} key={index} />
							)
						})
					}
					{
						dbPlansLifetime.map((item, index) => {
							return (
								<PlanItem item={item} key={index} />
							)
						})
					}
				</div>
			</div>
		</div>

	)
}
export default Plans