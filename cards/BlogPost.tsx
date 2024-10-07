import Button from "../Button";
import colorTypes from "../functions/ColorTypes";
import {H2, Paragraph} from "../Typo";
import Blocks from "../Blocks";
import Image from "../Image";
import ContentType from "@/types/Content";


export default function BlogPost({blog,compact}: Readonly<{blog: ContentType,compact:boolean}>)
{
	if(!blog)
	{
		return null;
	}
	let { created_at, title, description, media, instagram} = blog;
	const user = blog.user ?? null;
	const date = new Date(created_at).toLocaleDateString('fa-IR');
	if(media)
	{
		media = process.env.NEXT_PUBLIC_UPLOAD_URL+"/" + media
	}
	else {
		media = "assets/images/image-placeholder.svg"
	}
	if(compact)
	{
		media = null;
	}
	if (user && user.avatar)
	{
		user.avatar = process.env.NEXT_PUBLIC_UPLOAD_URL+"/" + user.avatar
	}
	if(user && !user.avatar)
	{
		user.avatar = "assets/images/image-placeholder.svg"
	}
	return (
		<Blocks.Gradient>
			<div className={"flex gap-2 justify-between p-2"}>
					<div className={"flex gap-2"}>
						{
							user &&
							<div className={"w-12 h-12"}>
								<Image src={user.avatar} alt={user.name} type={"cover"}></Image>
							</div>
						}
						<div>
							{
								user &&
                                	<H2 className={"mb-2"}>
										{user.name}
									</H2>
							}
							<Paragraph className={"text-slate-400"}>
								{date}
							</Paragraph>
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
                        <Image
                               src={media} alt={title} type={"cover"}></Image>

                    </div>

				}
			</div>
		</Blocks.Gradient>
	);
}