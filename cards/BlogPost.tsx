import Button from "../Button";
import colorTypes from "../functions/ColorTypes";
import { H2, H3, Paragraph } from "../Typo";
import Blocks from "../Blocks";
import Image from "../Image";
import ContentType from "@/types/Content";
import Language from "@/locales/Language";
import Link from "next/link";


export default function BlogPost({ blog, compact }: Readonly<{ blog: ContentType, compact: boolean }>) {
	if (!blog) {
		return null;
	}
	const user = blog.user ?? null;
	const date = new Date(blog.created_at).toLocaleDateString('fa-IR');
	const author = {
		name: "شرکت گیلاس",
		avatar: "assets/images/image-placeholder.svg"
	}
	const externalLink = {
		name: "",
		link: ""
	}

	let media = "assets/images/image-placeholder.svg"
	if (blog.avatar) {
		media = process.env.NEXT_PUBLIC_UPLOAD_URL + "/" + blog.avatar
	}
	if (user && user.avatar) {
		author.avatar = process.env.NEXT_PUBLIC_UPLOAD_URL + "/" + user.avatar
	}
	if (user && user.name) {
		author.name = user.name
	}

	return (
		<Blocks.Dark className={"relative"}>
			<div className={"absolute bottom-0 left-0 w-full h-full bg-bg-cherry v-mask rotate-180 rounded-xl -z-[1]"} />
			<div className={"flex flex-wrap gap-2 justify-between md:p-2"}>
				<div className={"hidden md:block"}>
					{
						externalLink && externalLink.name === "instagram" &&
						<Button tag={"a"} href={externalLink.link} color={colorTypes.primary}
							icon={<span className={"fab fa-instagram"} />}>
							in Instagram
						</Button>
					}
					{
						externalLink && externalLink.name === "youtube" &&
						<Button tag={"a"} href={externalLink.link} color={colorTypes.primary}
							icon={<span className={"fab fa-youtube"} />}>
							in Youtube
						</Button>
					}
				</div>
			</div>
			<div className={"md:p-2"}>
				<div className={"flex items-start justify-between gap-2"}>
					<div>
						<a href={"/blog/" + blog.slug}>
							<H2 className={"h-16 text-slate-300 text-ellipsis w-full overflow-hidden  line-clamp-2 my-4 md:my-0 font-bold text-lg"}>
								<span className={"fa fa-link-simple me-2 text-indigo-500"}></span>
								<span>
									{blog.title}
								</span>
							</H2>
						</a>
						<Paragraph
							className={"text-slate-400 mb-4 text-sm font-light leading-12 h-10 text-ellipsis w-full overflow-hidden  line-clamp-2"}>
							{blog.short_description}
						</Paragraph>
					</div>
					<Link href={`/blog/${blog.slug}`}>
						{
							blog.avatar && compact &&
							<div>
								<div className={"w-24 h-24 rounded-xl overflow-hidden shadow-lg shadow-violet-900/30"}>
									<Image src={media} alt={blog.title} type={"cover"}></Image>
								</div>
							</div>
						}
					</Link>
				</div>
				{
					<Link href={`/blog/${blog.slug}`}>
						{blog.avatar && !compact &&
							<div className={" rounded-2xl overflow-hidden"}>
								<Image src={media} alt={blog.title} type={"cover"}></Image>
							</div>}
					</Link>
				}
			</div>
			<div className={"flex gap-2 border-t border-white border-opacity-10 pt-4 mt-4"}>
				<div className={"w-10 h-10"}>
					<Image src={author.avatar} alt={author.name} type={"cover"}></Image>
				</div>
				<div className={"flex flex-col"}>
					<H3 element={"div"} className={"text-slate-400 text-sm"}>
						{author.name}
					</H3>
					<Paragraph className={"text-slate-500 text-xs"}>
						{date}
					</Paragraph>
				</div>
				<div className={"flex-1"}></div>
				<div className={""}>
					<Button tag={"a"} href={`/blog/${blog.slug}`} color={colorTypes.default}
						className={"justify-center"}>
						<span className={"fa fa-link-simple"}> </span>
						<span>
							{Language().seePost}
						</span>
					</Button>
				</div>
			</div>
		</Blocks.Dark >
	);
}