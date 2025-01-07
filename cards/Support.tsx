import {H3} from "../Typo";
import colorTypes from "../functions/ColorTypes";

interface SupportProps {
	color: colorTypes;
	title: string;
	description: string;
}
export default function Support({color, title, description}: Readonly<SupportProps>) {
return (
	<div className={"bg-slate-900 flex sm:inline-flex gap-4 bg-opacity-50 rounded-xl p-4 flex-wrap sm:flex-nowrap justify-center sm:justify-start sm:text-start"}>
		<div className={"ps-2 flex gap-2"}>
			<div>
				{
					color === colorTypes.danger &&
						<div className={"w-6 h-6 shadow-lg shadow-violet-600 bg-violet-600 rounded-full"}></div>
				}
				{
					color === colorTypes.default &&
						<div className={"w-6 h-6 shadow-lg shadow-200-600 bg-slate-50 rounded-full"}></div>
				}
				{
					color === colorTypes.primary &&
						<div className={"w-6 h-6 shadow-lg shadow-indigo-600 bg-indigo-600 rounded-full"}></div>
				}
				{
					color === colorTypes.success &&
						<div className={"w-6 h-6 shadow-lg shadow-green-600 bg-green-600 rounded-full"}></div>
				}
				{
					color === colorTypes.warning &&
						<div className={"w-6 h-6 shadow-lg shadow-orange-500 bg-orange-600 rounded-full"}></div>
				}

			</div>
			<div className={""}>
				<H3 element={"div"}>
					{title}
				</H3>
			</div>
		</div>
		<div className={"text-slate-500 text-sm leading-6"}>
			<div>
				{description}
			</div>
		</div>
	</div>

)
}