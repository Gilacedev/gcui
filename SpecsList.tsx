"use client"
import {ParallaxProvider} from "react-scroll-parallax";
import Spec from "@/components/cards/Spec";
import Blocks from "@/components/Blocks";
import {Paragraph} from "@/components/Typo";
import Language from "@/locales/Language";
import Input from "@/components/Input";
import {ReactNode, useState} from "react";

const SpecsList = ({specs}) =>{
	const [localSpecs,setLocalSpecs] = useState(specs)
	const localSearch = (e)=>{
		let search = e.target.value
		if(!search || search === "")
		{
			setLocalSpecs(specs)
			return
		}
		let newSpecs = specs.data.filter((item)=>{
			let result = false;
			if(item.title && item.title.includes(search))
			{
				result = true
			}
			if(item.short_description && item.short_description.includes(search))
			{
				result = true
			}
			return result
		})
		setLocalSpecs({...specs,data:newSpecs})
	}
	return(		<div>

			<div className={"py-10 sm:block sm:w-96 sticky top-8 z-40"}>
				<Blocks.Dark className={"bg-slate-100 backdrop-blur-md"}>
					<Input onInput={localSearch} className={""} icon={<span className={"far fa-search"} /> as ReactNode} placeholder={Language().specs_search_text}/>
				</Blocks.Dark>
			</div>
			<ParallaxProvider>
				<div className={"py-8 px-2 sm:px-0 relative overflow-x-hidden"}>
					<div
						className={"h-full w-4 rounded-3xl bg-violet-800/30 absolute top-12 left-1/2 -translate-x-1/2"}/>
					<div className={"py-8 px-2 sm:px-0 relative "}>
						{
							localSpecs.data && localSpecs.data.length > 0 &&
							localSpecs.data.map((item, index) => {
								return (<Spec key={index} item={item} direction={index % 2 == 0 ? "odd" : "even"}/>)
							})
						}
					</div>
				</div>
			</ParallaxProvider>
		</div>
	);
}
export default SpecsList