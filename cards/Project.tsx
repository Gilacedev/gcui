import Blocks from "@/components/Blocks";
import Image from "next/image";
import {H3, Paragraph} from "@/components/Typo";

interface ProjectProps {
	media: string;
	title: string;
	description: string;
}
export default function Project({media, title, description}: Readonly<ProjectProps>)
{
	let localNader = media || "assets/images/image-placeholder.svg";

	return (
		<Blocks.Gradient >
			<div className={"flex gap-4 items-center p-2"}>
				<div>
					<Image src={localNader} alt={title} width={100} height={100}></Image>
				</div>
				<div className={""}>
					<H3 className={"text-indigo-300 mb-2"}>
						{title}
					</H3>
					<Paragraph className={"text-slate-400"}>
						{description}
					</Paragraph>
				</div>
			</div>
		</Blocks.Gradient>

	);
}