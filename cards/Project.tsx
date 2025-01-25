import Blocks from "../Blocks";
import {H3, Paragraph} from "../Typo";
import Image from "../Image";
import Content from "@/types/Content";
import Button from "@/components/Button";
import ColorTypes from "@/components/functions/ColorTypes";

export default function Project({data}: {data:Content})
{
	if (!data) {
		return null
	}
	let localNader = data.avatar ? process.env.NEXT_PUBLIC_UPLOAD_URL+"/"+data.avatar : "assets/images/image-placeholder.svg";

	return (
		<Blocks.Gradient >
			<div className={"flex text-center  sm:text-start flex-wrap sm:flex-nowrap gap-4 items-center"}>
				<a href={"/projects/"+data.slug} className={"w-full object-cover sm:h-auto sm:w-1/3 block rounded-xl overflow-hidden shadow-lg shadow-slate-900/30" }>
					<Image src={localNader} alt={data.title} type={"contain"}></Image>
				</a>
				<div className={"w-full"}>
					<a href={"/projects/"+data.slug} className={"block"}>
						<H3 className={"text-indigo-300 mb-2"}>
							{data.title}
						</H3>
					</a>
					<Paragraph className={"text-sm text-slate-400 line-clamp-3"}>
						{data.short_description}
					</Paragraph>
				</div>
			</div>
		</Blocks.Gradient>

	);
}