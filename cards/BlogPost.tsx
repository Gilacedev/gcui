import Image from "next/image";
import Button from "../Button.tsx";
import colorTypes from "../functions/ColorTypes";
import {H2, Paragraph} from "../Typo";
import Blocks from "../Blocks";

interface BlogPostProps {
	author: string;
	authorMedia?: string;
	instagram?: string;
	date: string;
	title: string;
	description: string;
	media?: string;
}
export default function BlogPost({author, authorMedia, date,instagram, title, description, media}: Readonly<BlogPostProps>) {
	let authorImage = authorMedia || "assets/images/image-placeholder.svg";
	return (
		<Blocks.Gradient>
			<div className={"flex gap-2 justify-between p-2"}>
				<div className={"flex gap-2 items-center"}>
					<div>
						<Image className={"w-10 h-10 rounded-full"} src={authorImage} alt={author} width={100} height={100}></Image>
					</div>
					<div>
						<div className={"text-slate-400"}>
							{author}
						</div>
						<div className={"text-slate-600"}>
							{date}
						</div>
					</div>
				</div>
				<div>
					{
						instagram &&
                        <Button tag={"a"} href={instagram} color={colorTypes.primary} icon={<span className={"fab fa-instagram"}/>}>
                            Like in Instagram
                        </Button>
					}
				</div>
			</div>
			<div className={"p-2"}>
				<H2 className={"mb-2"}>
					<span className={"fa fa-link-simple me-2 text-indigo-500"}></span>
					<span>
						{title}
					</span>
				</H2>
				<Paragraph className={"text-slate-400 mb-4"}>
					{description}
				</Paragraph>
				{
					media &&
                    <div>
                        <Image className={"w-full h-auto"}
                               src={media} alt={title} width={1000}
                               height={1000}></Image>

                    </div>

				}
			</div>
		</Blocks.Gradient>
	);
}