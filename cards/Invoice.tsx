import Blocks from "../Blocks";
import React from "react";
import Language from "@/locales/Language";
import Button from "@/components/Button";

const Invoice = ({invoice}) =>
{
	const expired = new Date(invoice.expired_at);
	let status = "pending";
	let days_remained = Math.floor((expired - new Date()) / (1000 * 60 * 60 * 24));

	if(days_remained < 30)
	{
		status = "warning";
	}
	if(days_remained < 2)
	{
		status = "danger";
	}
	if(days_remained <= 0)
	{
		status = "expired";
	}


	return(
		<Blocks.Dark>
			<div className="">
				<div className={"flex justify-between items-center  mb-4"}>
					<div>
						{Language().invoce_number} {invoice.code}
					</div>
					<div>
						<div className={"flex gap-2 text-xs"}>
							<span className={"text-violet-300"}>
								{new Date(invoice.created_at).getHours()} : {new Date(invoice.created_at).getMinutes()}
							</span>
							<span className={""}>
								{new Date(invoice.created_at).toLocaleDateString("fa-IR")}
							</span>
						</div>
					</div>
				</div>
				<div className={"mb-4 text-xs leading-6"}>
					{
						invoice.basket.length > 0 &&
						invoice.basket.map((item, index) => {
							return (
								<div key={index} className={"flex gap-2 items-center"}>
									<span className={"fa fa-check text-orange-400"}></span>
									<div className={"text-slate-500"}>
										{item.title}
									</div>
								</div>
							)
						})
					}
				</div>
				<div className={"border-y border-white border-opacity-10 py-4 text-end flex gap-2 items-center justify-end" } >
					{
						<span className={"text-slate-400 text-sm"}>
							{Language().payable_price}
						</span>
					}
					:
					{
						<span className={"text-cyan-500 flex gap-1"}>
							<span>
								{ Intl.NumberFormat().format(invoice.price) }
							</span>
							<span>
								{Language().price_unit}
							</span>
						</span>
					}
				</div>
				<div className={"mt-2 flex justify-between items-center"}>
					<div className={"text-sm"}>
						{
							status === "expired" &&
							<div className={"text-red-400"}>
								{Language().invoice_expired}
							</div>
						}
						{
							status === "danger" &&
							<div className={"text-red-400"}>
								{Language().invoice_danger}
							</div>
						}
						{
							status === "warning" &&
							<div className={"text-yellow-400"}>
								{Language().invoice_warning}
							</div>
						}
					</div>
					<div>
						<Button color={"primary"} tag={"a"} href={`/management/invoices/${invoice.code}`} icon={<span className={"fa fa-chevron-left"}></span>}>
							{Language().pay}
						</Button>
					</div>
				</div>
			</div>
		</Blocks.Dark>
	)
}
export default Invoice;