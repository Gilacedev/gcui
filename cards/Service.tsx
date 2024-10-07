import Blocks from "../Blocks";
import {H2, Paragraph} from "../Typo";
import Button from "../Button";
import ColorTypes from "../functions/ColorTypes";
import content from "@/types/Content";
import {bool} from "prop-types";

export default function Service({service}: { service: content }) {
	if (!service) {
		return null
	}
	return (
		<Blocks.Gradient className={"relative"}>
			<div className={"relative z-10 -my-8 text-center pb-10 px-4"}>
				<div className={"bg-gradient-shadow w-full h-12"}></div>
				<H2 element={"h3"} className={"my-2 text-orange-400"}>
					<span className={"fa fa-bolt me-2"} />
					{service.title}
				</H2>
				<Paragraph className={"text-slate-400"}>
					{service.short_description}
				</Paragraph>
				<div className={"my-4 w-full"}>
					<Button color={ColorTypes.default} icon={<span className={"fas fa-shopping-cart"}></span>} href={"/services/" +"/"+ service.slug} tag={"a"}>
						مشاهده و خرید
					</Button>
				</div>
			</div>
			<div className={`absolute top-2 left-2 right-2 bottom-2 border border-orange-400 rounded-2xl ${service._featured ? "particular" : ""}`}>
				{
					(service._featured == 1) &&
                    <>
                        <i></i>
                        <i></i>
                        <i></i>
                    </>
				}
			</div>
		</Blocks.Gradient>

	)
}