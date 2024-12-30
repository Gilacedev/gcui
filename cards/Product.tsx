import Blocks from "../Blocks";
import { H2, Paragraph } from "../Typo";
import Button from "../Button";
import ColorTypes from "../functions/ColorTypes";
import Image from "../Image";
import content from "@/types/Content";
import Language from "@/locales/Language";
import Link from "next/link";

interface SloganProps {
	media: string;
	title: string;
	description: string;
	url: string;
	particular?: boolean;
}
export default function Product({ product }: { product: content }) {
	if (!product) {
		return null
	}
	let localMedia = product.avatar ? process.env.NEXT_PUBLIC_UPLOAD_URL + "/" + product.avatar : "assets/images/image-placeholder.svg";
	return (
		<Blocks.Gradient className={"relative mt-8 w-full"}>
			<div className={"relative z-10 -my-8 text-center pb-10 px-4 "}>
				<div className={"animate-onTheEarth"}>
					<Link href={"/products/" + product.slug}>
						<div className={"w-3/4 mx-auto rounded-md"} >
							<Image src={localMedia} alt={product.title} type={"contain"} />
						</div>
					</Link>
				</div>
				<div className={"rotate-180"}>
					<div className={" animate-onTheEarth bg-gradient-shadow w-full h-12"}></div>
				</div>
				<Link href={"/products/" + product.slug}>
					<H2 element={"h3"} className={"my-2"}>
						{product.title}
					</H2>
				</Link>
				<Paragraph className={"text-slate-400  text-ellipsis line-clamp-2"}>
					{product.short_description}
				</Paragraph>
				<div className={"my-4 w-full"}>
					<Button color={ColorTypes.default} icon={<span className={"fas fa-shopping-cart"}></span>} href={"/products/" + product.slug} tag={"a"}>
						{Language().view_and_buy}
					</Button>
				</div>
			</div>
			<div className={`absolute top-2 left-2 right-2 bottom-2 border border-indigo-500 rounded-2xl  ${product._featured == 1 ? "particular" : ""}`}>
				{
					product._featured == 1 &&
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