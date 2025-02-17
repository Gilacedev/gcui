import { H3, Paragraph } from "../Typo";
import Image from "../Image";
import ContentType from "@/types/Content";

type QuoteProps = {
	data: ContentType;
};

const Quote = ({ data }: QuoteProps) => {
	if (!data) {
		return null;
	}
	const description = data.description || "";
	return (
		<div className={"relative flex flex-col overflow-hidden rounded-xl min-w-64"}>
			<div className={"relative z-10 text-center p-4"}>
				<div>
					<div className={"w-32 h-32 rounded-full mx-auto my-6 overflow-hidden"}>
						<Image type={"cover"} src={process.env.NEXT_PUBLIC_UPLOAD_URL + "/" + data.avatar} alt={data.title} />
					</div>
				</div>
				<div>
					<H3 className={"text-violet-200 text-lg mb-2"}>{data.title}</H3>
					<Paragraph className={"text-slate-400 font-light"}>{data.short_description}</Paragraph>
					<span className={"fa fa-quote-left float-left text-indigo-500"}></span>
					<Paragraph className={"text-slate-300 mt-6 min-h-24"} element={"div"}>
						<div dangerouslySetInnerHTML={{ __html: description }} />
					</Paragraph>
					<span className={"fa fa-quote-right float-right text-indigo-500"}></span>
				</div>
			</div>
			<div
				className={"absolute scale-x-110 left-0 top-0 w-full h-full object-cover blur-md rounded-xl saturate-50 brightness-75 contrast-75"}>
				<Image src={process.env.NEXT_PUBLIC_UPLOAD_URL + "/" + data.avatar} alt={data.title} type={"cover"} />
			</div>
			<div className={"absolute left-0 top-0 w-full h-full object-cover mix-blend-overlay bg-slate-800/80"}></div>
			<div
				className={"absolute bottom-2 left-2 origin-top-left opacity-10 -rotate-90 text-4xl uppercase text-center text-nowrap font-black"}>
				{data.slug}
			</div>
		</div>
	);
};

export default Quote;
