import {H2, Paragraph} from "./Typo";
import Button from "./Button";
import Blocks from "./Blocks";
import content from "@/types/Content";

const AlertMessage = ({data}: { data:content }) => {

	if (!data) {
		return null
	}
	let extraFeatures = {
		url: null,
		icon: "exclamation-circle",
		btn_title: "",
		reactionText: ""
	}

	if(data && data.meta)
	{

		try {
			let temp2 = JSON.parse(data.meta)
			if (temp2 && temp2.menu && temp2.menu.length > 0)
			{
				extraFeatures.url = temp2.menu[0].url
				extraFeatures.icon = temp2.menu[0].icon
				extraFeatures.btn_title = temp2.menu[0].btn_title
			}
		}
		catch (e) {
			console.log("menu data:",data.meta)
		}
	}

	return (
		<Blocks.Dark>
			<div className={"py-8 gap-4 flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-stretch"}>
				{
					extraFeatures.icon &&
                    <div className={"text-4xl text-indigo-500"}>
						<span className={`far fa-${extraFeatures.icon}`}/>
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
					extraFeatures.url &&
                    <div className={"w-52 flex justify-center items-center"}>
                        <Button tag={"a"} href={extraFeatures.url} icon={<span className={"far fa-chevron-left"}/>}>
							<span>{extraFeatures.btn_title}</span>
                        </Button>
                    </div>
				}

			</div>
		</Blocks.Dark>
	)
}
export default AlertMessage