import {H2, Paragraph} from "./Typo";
import Button from "./Button";
import Blocks from "./Blocks";
import content from "@/types/Content";

const AlertMessage = ({data}: { data:content }) => {

	if (!data) {
		return null
	}
	if(data)
	{

		let tempMeta = {
			url: null,
			icon: "exclamation-circle",
			btn_title: "",
			reactionText: ""
		}
		try {
			let temp2 = JSON.parse(data.meta)
			tempMeta.url = temp2.menu[0].url
			tempMeta.icon = temp2.menu[0].icon
			tempMeta.btn_title = temp2.menu[0].btn_title
		}
		catch (e) {
			console.log(e)
			tempMeta.url = null
			tempMeta.icon = "exclamation-circle"
			tempMeta.btn_title = ""
		}
		data.meta = tempMeta
	}

	return (
		<Blocks.Dark>
			<div className={"py-8 gap-4 flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-stretch"}>
				{
					data.meta.icon &&
                    <div className={"text-4xl text-indigo-500"}>
						<span className={`far fa-${data.meta.icon}`}/>
                    </div>
				}
				<div className={"w-full flex flex-col gap-4"}>
					<H2 element={"div"}>
						{data.title}
					</H2>
					<Paragraph className={"text-slate-400"} element={"p"}>
						{data.short_description}
					</Paragraph>
				</div>
				{
					data.meta.url &&
                    <div className={"w-52"}>
                        <Button tag={"a"} href={data.meta.url} icon={<span className={"far fa-chevron-left"}/>}>
							{data.meta.btn_title}
                        </Button>
                    </div>
				}

			</div>
		</Blocks.Dark>
	)
}
export default AlertMessage