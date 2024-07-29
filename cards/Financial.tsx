import Blocks from "@/components/Blocks";
import {H3, Paragraph} from "@/components/Typo";
interface FinancialCardProps {
	number: number;
	title: string;
	description: string;
	icon?: string;
}
export default function FinancialCard({number, title, description, icon}: Readonly<FinancialCardProps>) {
	return (
		<div className={"flex gap-4"}>
			<div className={"bg-slate-800 rounded-xl p-4 flex items-center justify-center"}>
				<span className={"text-slate-500 text-6xl"}>
					{number}
				</span>
			</div>
			<div>
				<H3 className={"mb-4"}>
					<span className={`fa fa-${icon} text-pink-400 me-2`}></span>
					<span>
						{title}
					</span>
				</H3>
				<Paragraph className={"text-slate-400"}>
					{description}
				</Paragraph>
			</div>
		</div>

	);
}