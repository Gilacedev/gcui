import Content from "@/types/Content";
import {makeMeta} from "@/components/functions/String";
import NumberIncrementor from "@/components/NumberIncrementor";

const Slogans = ({slogans}:{slogans:Content}) => {
	if(!slogans)
	{
		return null;
	}
	const colors = [
		[
			"text-teal-300",
			"text-teal-600",
			"shadow-[0_0_1rem_inset_rgba(0,0,0,0.6),0_0_0.3rem_rgba(255,255,255,0.1),0_0_18rem_var(--color-teal-700)]",
			"to-teal-500/10",
		],
		[
			"text-violet-300",
			"text-violet-600",
			"shadow-[0_0_1rem_inset_rgba(0,0,0,0.6),0_0_0.3rem_rgba(255,255,255,0.1),0_0_18rem_var(--color-violet-400)]",
			"to-violet-500/10"
		],
		[
			"text-sky-300",
			"text-sky-600",
			"shadow-[0_0_1rem_inset_rgba(0,0,0,0.6),0_0_0.3rem_rgba(255,255,255,0.1),0_0_18rem_var(--color-sky-700)]",
			"to-sky-500/10"
		]
	]
	const speed = [7,1,1]
	let metaData = makeMeta(slogans);
	if(!metaData.meta || !Array.isArray(metaData.meta.menu))
	{
		return null;
	}
	return (
		<section id={"slogans"} className={"grid grid-cols-1 md:grid-cols-3 gap-4 p-4"}>
			{
				metaData.meta.menu.map((slogan:any, index:number) =>{
					return (<div
						className={"shadow-2xl border border-slate-600/10 bg-radial to-slate-950/10 from-slate-950/30 rounded-2xl p-4 relative overflow-x-hidden"}>
						<h3 className={" font-light"}>
					<span className={`text-8xl font-bold block ${colors[index][0]}`}>
						<NumberIncrementor maxNumber={slogan.number} speed={speed[index]}/>
						<span>{index==2?"M":""}</span>
					</span>
							<span className={"block text-2xl font-bold "}>
						{slogan.title}
					</span>
						</h3>
						<span
							className={`absolute left-4 top-4 w-24 h-24 rounded-full bg-linear-to-b from-slate-950/10 ${colors[index][3]} flex items-center justify-center ${colors[index][2]}`}>
							<span className={`text-5xl fal fa-${slogan.icon} ${colors[index][1]} text-shadow`}/>
						</span>
						<div className={"pt-8 text-slate-500 text-xs leading-6"}>
							{slogan.description}
						</div>
					</div>)
				})
			}

		</section>
	);
}
export default Slogans;