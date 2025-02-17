import Blocks from "../Blocks";
import React, { useEffect } from "react";
import Language from "@/locales/Language";
import Button from "@/components/Button";
import { getInvoice } from "@/models/InvoiceModel";
import Loader from "@/components/Loader";
import Invoice from "@/types/Invoice";

type InvoiceProps = {
	invoice: Invoice | null;
}

const InvoiceComponent = ({ invoice }: InvoiceProps) => {
	if (!invoice) {
		return null;
	}

	const [dbInvoice, setDbInvoice] = React.useState<Invoice | null>(null); 
	const [loading, setLoading] = React.useState(true);
	const expired = new Date(invoice.expired_at);
	let status = "pending";
	let days_remained = Math.floor((expired.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

	if (days_remained < 30) {
		status = "warning";
	}
	if (days_remained < 2) {
		status = "danger";
	}
	if (days_remained < 0) {
		status = "expired";
	}

	const get = async () => {
		setLoading(true);
		let apiInvoice = await getInvoice(invoice.invoice_number);
		if (apiInvoice !== null) {
			setDbInvoice(apiInvoice); 
		}
		setLoading(false);
	}

	useEffect(() => {
		get();
	}, []);

	return (
		<Blocks.Dark>
			<div className="">
				<div className={"flex justify-between items-center mb-4"}>
					<div>
						<span className={"text-sm pe-2"}>{Language().invoce_number}:</span>
						<a className={"text-teal-600"} href={`/management/invoice/${invoice.invoice_number}`}>
							{invoice.invoice_number}
						</a>
					</div>
					<div>
						<div className={"flex gap-2 text-xs"}>
							<span className={"text-violet-300 myLtr"}>
								{new Date(invoice.created_at).getHours()} : {new Date(invoice.created_at).getMinutes()}
							</span>
							<span className={"myLtr"}>
								{new Date(invoice.created_at).toLocaleDateString("fa-IR")}
							</span>
						</div>
					</div>
				</div>
				<div className={"mb-4 text-xs leading-6"}>
					{
						loading &&
						<div className={"text-center py-8"}>
							<Loader />
						</div>
					}
					{
						!loading && dbInvoice?.items && dbInvoice.items.length > 0 &&
						dbInvoice.items.map((item, index) => (
							<div key={index} className={"flex gap-2 items-center"}>
								<span className={"fa fa-check text-orange-400"}></span>
								<div className={"text-slate-500"}>
									<span>{item?.payable?.short_description}</span> -
									<span className={"px-2"}>{item?.payable?.price}</span>
									<span>{Language().price_unit}</span>
								</div>
							</div>
						))
					}
				</div>
				<div className={"border-y border-white/10 py-4 text-end flex gap-2 items-center justify-end"}>
					<span className={"text-slate-400 text-sm"}>{Language().payable_price}:</span>
					<span className={"text-cyan-500 flex gap-1"}>
						<span>{Intl.NumberFormat().format(invoice.total)}</span>
						<span>{Language().price_unit}</span>
					</span>
				</div>
				<div className={"mt-2 flex justify-between items-center"}>
					{!dbInvoice?.is_paid ? (
						<div className={"text-sm"}>
							{status === "expired" && <div className={"text-red-400"}>{Language().invoice_expired}</div>}
							{status === "danger" && <div className={"text-red-400"}>{Language().invoice_danger}</div>}
							{status === "warning" && <div className={"text-yellow-400"}>{Language().invoice_warning}</div>}
						</div>
					) : (
						<div className={"text-teal-400 text-sm"}>{Language().invoice_paid}</div>
					)}
					{days_remained >= 0 && dbInvoice?.is_paid === false && (
						<div>
							<Button color={"primary"} tag={"a"} href={`/management/invoice/${invoice.invoice_number}`} icon={<span className={"fa fa-chevron-left"}></span>}>
								{Language().pay}
							</Button>
						</div>
					)}
				</div>
			</div>
		</Blocks.Dark>
	);
};

export default InvoiceComponent;
