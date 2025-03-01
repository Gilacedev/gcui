"use client"
import Content from "@/types/Content";
import Blocks from "@/components/Blocks";
import Image from "@/components/Image";
import Button from "@/components/Button";
import ColorTypes from "@/components/functions/ColorTypes";
import {useState} from "react";
import HtmlContainer from "@/components/styles/HtmlContainer";

type specProps = {
	item:Content,
	direction:"odd"|"even",
	expand?:Function
};
const Spec = ({item,direction,expand}:specProps)=>{
	const [open,setOpen] = useState(false)
	if(!item)
	{
		return null;
	}
	let createdAt = new Date(item.created_at)


	return (
		<div  className={`not:first-child:opacity-10 mt-8 sm:mt-2 sm:w-1/2 flex flex-col ${direction==="odd"?"sm:items-end sm:pe-4":"sm:items-start sm:start-1/2 sm:ps-4"} relative`}>
			<div className={`absolute w-6 h-6 bg-violet-300  sm:translate-x-0 ${direction==="odd"?"-translate-x-1/2 end-1/2 sm:-end-3":"translate-x-1/2 start-1/2 sm:-start-3"} top-1 rounded-3xl`}></div>
			<div className={"flex gap-1 items-center mb-3 "}>
				<div className={"text-slate-500"}>
					{createdAt.toLocaleDateString("fa-IR", {day:"2-digit"})}
				</div>
				<div className={"bg-slate-900 text-slate-400 p-2 rounded-lg"}>
					{createdAt.toLocaleDateString("fa-IR", {month:"long"})}
				</div>
				<div className={"text-slate-500"}>
					{createdAt.toLocaleDateString("fa-IR", {year:"numeric"})}
				</div>
			</div>
			<Blocks.Dark className={"rounded-3xl bg-slate-700 p-4 w-full sm:w-2/3 backdrop-blur-md"}>
				<h2 className={`${(item && item._featured)?"text-amber-300 text-xl":"text-slate-100"}  pb-3`}>
					{item.title}
				</h2>
				<div className={"text-xs text-slate-400 leading-6"}>
					{item.short_description}
				</div>
				<div className={`transition-all ${open?"max-h-screen overflow-y-scroll":"max-h-0 overflow-hidden"}`}>
					<HtmlContainer html={item.description ??""} />
				</div>
				{
					item && item._featured &&
                    <div>
						{
							item.avatar &&
							<div className={"py-8"}>
								<Image src={process.env.NEXT_PUBLIC_UPLOAD_URL + "/" + item.avatar} alt={item.title}
									   type={"contain"}></Image>
							</div>
						}
                        <div className={"flex justify-end"}>
                            <Button color={ColorTypes.default} onClick={(e) => {
								setOpen(!open)
							}}>
								<span className={`far fa-chevron-down ${open && "rotate-180"}`}></span>
                            </Button>
                        </div>
                    </div>

				}
			</Blocks.Dark>
		</div>
	);
}
export default Spec