import Blocks from "@/components/Blocks";
import Language from "@/locales/Language";

const Ticket = ({topic}) => {
	return (
		<Blocks.Dark >
			<div className={"text-slate-600"}>
				{topic.business.name}
			</div>
			<div className={"text-slate-300"}>
				{topic.title}
			</div>
			<div className={"flex items-center justify-between mt-8"}>
				<div>
					<div className={"text-white bg-orange-400 text-xs p-2 rounded-2xl"}>
						{Language().ticket_pending}
					</div>
				</div>
				<div className={"flex gap-2 text-xs"}>
					<div className={"text-violet-300"}>
						{new Date(topic.created_at).getHours()} : {new Date().getMinutes()}
					</div>
					<div className={""}>
						{new Date(topic.created_at).toLocaleDateString("fa-IR")}
					</div>
				</div>
			</div>
		</Blocks.Dark>

	)
}
export default Ticket;