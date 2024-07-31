import Blocks from "../Blocks";
import React from "react";
import InlineMessage from "../InlineMessage";

interface InvoiceProps {
	title: string;
	description: React.ReactNode | string;
	date: string;
	time: string;
	message ?: React.ReactNode | typeof InlineMessage;
	action ?: React.ReactNode | string;
}
const Invoice = ({title, description, date, time, message, action}: Readonly<InvoiceProps>) =>
{
	return(
		<Blocks.Dark>
			<div className="">
				<div className={"flex justify-between items-center text-slate-400 mb-4"}>
					<div>
						{title}
					</div>
					<div>
						<div className={"flex flex-row-reverse gap-2"}>
							<span className={" text-indigo-400"}>
								{date}
							</span>
							<span className={""}>
								{time}
							</span>
						</div>
					</div>
				</div>
				<div className={"mb-4"}>
					{description}
				</div>
				<div className={"flex justify-between items-center"}>
					<div>
						{message}
					</div>
					<div>
						{action}
					</div>
				</div>
			</div>
		</Blocks.Dark>
	)
}
export default Invoice;