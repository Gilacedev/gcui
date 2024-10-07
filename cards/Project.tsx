import Blocks from "../Blocks";
import {H3, Paragraph} from "../Typo";
import Image from "../Image";

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
			<div className={"flex text-center  sm:text-start flex-wrap sm:flex-nowrap gap-4 items-center"}>
				<div className={"w-full h-12 sm:h-auto sm:w-1/3"}>
					<Image src={localNader} alt={title} type={"contain"}></Image>
				</div>
				<div className={"w-full"}>
					<H3 className={"text-indigo-300 mb-2"}>
						{title}
					</H3>
					<Paragraph className={"text-sm text-slate-400"}>
						{description}
					</Paragraph>
				</div>
			</div>
		</Blocks.Gradient>

	);
}