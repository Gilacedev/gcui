import Blocks from "@/components/Blocks";
import Image from "next/image";
import {H2, Paragraph} from "@/components/Typo";
interface SloganProps {
	media: string;
	title: string;
	description: string;
	particular?: boolean;
}
export default function Slogan({media, title, description ,particular}: Readonly<SloganProps>) {
	let localMedia = media || "assets/images/image-placeholder.svg";
	return (
		<Blocks.Gradient className={"relative mt-8"}>
			<div className={"relative z-10 -my-8 text-center pb-10 px-4"}>
				<div className={""}>
					<Image src={localMedia} alt={title} width={100} height={100}
						   className={"w-3/4 mx-auto "}/>
				</div>
				<div className={"bg-gradient-shadow w-full h-12"}></div>
				<H2 element={"h3"} className={"my-2"}>
					{title}
				</H2>
				<Paragraph className={"text-slate-400"}>
					{description}
				</Paragraph>
			</div>
			<div className={`absolute top-2 left-2 right-2 bottom-2 border border-indigo-500 rounded-2xl ${particular ? "particular" : ""}`}>
				{
					particular &&
                    <div>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
				}
			</div>
		</Blocks.Gradient>

	)
}