import Blocks from "../Blocks";
import {H2, Paragraph} from "../Typo";
import Button from "../Button";
import ColorTypes from "../functions/ColorTypes";

interface SloganProps {
	title: string;
	description: string;
	url:string;
	particular?: boolean;
}
export default function Service({ title, description ,url , particular}: Readonly<SloganProps>) {
	return (
		<Blocks.Gradient className={"relative"}>
			<div className={"relative z-10 -my-8 text-center pb-10 px-4"}>
				<div className={"bg-gradient-shadow w-full h-12"}></div>
				<H2 element={"h3"} className={"my-2 text-orange-400"}>
					<span className={"fa fa-bolt me-2"} />
					{title}
				</H2>
				<Paragraph className={"text-slate-400"}>
					{description}
				</Paragraph>
				<div className={"my-4 w-full"}>
					<Button color={ColorTypes.default} icon={<span className={"fas fa-shopping-cart"}></span>} href={url}>
						مشاهده و خرید
					</Button>
				</div>
			</div>
			<div className={`absolute top-2 left-2 right-2 bottom-2 border border-orange-400 rounded-2xl ${particular ? "particular" : ""}`}>
				{
					particular &&
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