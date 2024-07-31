import Image from "next/image";
import {H3, Paragraph} from "../Typo";

interface QuotesProps {
	title : string;
	description : string;
	text : string;
	media : string;
	brand : string;
}
const Quote = ({title, description, text, media, brand}: Readonly<QuotesProps>) => {
	return (
		<div className={"relative flex flex-col overflow-hidden rounded-xl w-64"}>
			<div className={"relative z-10 text-center p-4"}>
				<div>
					<Image src={media} alt={title} width={100} height={100}
						   className={"w-32 h-32 rounded-full mx-auto my-6"}/>
				</div>
				<div>
					<H3 className={"text-pink-100 text-lg mb-2"}>
						{title}
					</H3>
					<Paragraph className={"text-slate-400 font-light"}>
						{description}
					</Paragraph>
					<span className={"fa fa-quote-left float-left text-indigo-500"}></span>
					<Paragraph className={"text-slate-300 mt-6"}>
						{text}
					</Paragraph>
					<span className={"fa fa-quote-right float-right text-indigo-500"}></span>
				</div>
			</div>
			<Image src={media} alt={title} width={100} height={100}
				   className={"absolute scale-x-110 left-0 top-0 w-full h-full object-cover blur-md rounded-xl saturate-50 brightness-75 contrast-75"}/>
			<div
				className={"absolute left-0 top-0 w-full h-full object-cover mix-blend-overlay bg-slate-800 opacity-80"}></div>
			<div
				className={"absolute bottom-2 left-2 origin-top-left opacity-10 -rotate-90 text-4xl uppercase text-center text-nowrap font-black"}>
				{brand}
			</div>
		</div>
	);
}
export default Quote;