"use client";
import {GetFileType} from "@/components/functions/File";
import Image from "@/components/Image";
import {useState} from "react";

const MediaPreview = ({content}) => {
	// const items = [
	// 	content.avatar?(process.env.NEXT_PUBLIC_UPLOAD_URL +"/"+ content.avatar):"assets/images/image-placeholder.svg",
	// 	...content.files.map((file)=>process.env.NEXT_PUBLIC_UPLOAD_URL +"/"+ file.slug)
	// ]
	const items = [
		{
			file : content.avatar?(process.env.NEXT_PUBLIC_UPLOAD_URL +"/"+ content.avatar):"assets/images/image-placeholder.svg",
			text : content.title,
			type : GetFileType(content.avatar)
		},
			...content.files.map((file)=>({
				file : process.env.NEXT_PUBLIC_UPLOAD_URL +"/"+ file.slug,
				text : file.name,
				type : GetFileType(file.slug)
			}))

	]
	const [activeItem , setActiveItem] = useState(items[0])
	const nextItem = ()=>{
		let index = items.indexOf(activeItem)
		if(index === items.length-1)
		{
			setActiveItem(items[0])
		}
		else
		{
			setActiveItem(items[index+1])
		}
	}
	const prevItem = ()=>{
		let index = items.findIndex((item)=>item.file === activeItem.file)
		if(index === 0)
		{
			items[items.length-1] && setActiveItem(items[items.length-1])
		}
		else {
			items[index - 1] && setActiveItem(items[index - 1])
		}
	}
	return (
		<div className={""}>
			<div className={"flex flex-col"}>
				<div className={"relative"}>
					<div className={"absolute top-1/2 left-1  bg-black bg-opacity-50 p-3 text-3xl rounded-lg flex items-center justify-center -translate-y-1/2 z-10 cursor-pointer hover:text-pink-400 transition-all"} onClick={()=>{prevItem()}}>
						<span className={"far fa-chevron-left "} />
					</div>
					<div className={"absolute top-1/2 right-1 bg-black bg-opacity-50 p-3 text-3xl rounded-lg flex items-center justify-center -translate-y-1/2 z-10 cursor-pointer hover:text-pink-400 transition-all"} onClick={()=>{nextItem()}}>
						<span className={"far fa-chevron-right "} />
					</div>
					<div className={"h-[60dvh] bg-slate-700 rounded-xl overflow-hidden"}>
						{
							activeItem.type === "img" &&
							<Image src={activeItem.file} alt={activeItem.text} type={"contain"}/>
						}
						{
							activeItem.type === "video" &&
							<video src={activeItem.file} controls={true} className={"h-full"}/>
						}
						{
							activeItem.type === "pdf" &&
							<a href={activeItem.file} target={"_blank"} className={"flex items-center gap-2"}>
								<span className={"far fa-file-pdf text-red-400"}/>
								<span>{activeItem.text}</span>
							</a>
						}
						{
							activeItem.type === "file" &&
							<div className={"flex items-center gap-2"}>
								<span className={"far fa-file text-red-400"}/>
								<span>{activeItem.text}</span>
							</div>
						}
					</div>
				</div>
				<div className={"pt-2 flex flex-nowrap gap-2"}>
					{
						items.length > 1 && items.map((item, index)=>{
							switch (item.type) {
								case "img":
									return (
										<div key={index} className={"w-24 h-24 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all"} onClick={()=>setActiveItem(item)}>
											<Image src={item.file} alt={item.text} type={"contain"}/>
										</div>
									)
								case "video":
									return (
										<div key={index} className={"w-24 h-24 rounded-lg overflow-hidden cursor-pointer  hover:scale-105 transition-all flex items-center justify-center bg-indigo-900"} onClick={()=>setActiveItem(item)}>
											<span className={"far fa-play text-4xl text-red-400"}/>
										</div>
									)
								case "pdf":
									return (
										<div key={index} className={"flex items-center gap-2 cursor-pointer hover:scale-105 transition-all"} onClick={()=>setActiveItem(item)}>
											<span className={"far fa-file-pdf text-red-400"}/>
											<span>{item.text}</span>
										</div>
									)
								default:
									return (
										<div key={index} className={"flex items-center gap-2 cursor-pointer hover:scale-105 transition-all"} onClick={()=>setActiveItem(item)}>
											<span className={"far fa-file text-red-400"}/>
											<span>{item.text}</span>
										</div>
									)

							}
					})
					}
				</div>
			</div>
		</div>
	)
}
export default MediaPreview;