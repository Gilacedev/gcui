"use client"
import React, {useState} from "react";
interface tabProps {
	headers: React.ReactNode[]
	contents: React.ReactNode[]
}
const Tab = ({ headers, contents }: Readonly<tabProps>) => {
	const [activeHeaderIndex ,setActiveHeaderIndex] = useState(0);

	return(
		<div className={"flex flex-col w-full"}>
			<ul className={"flex flex-nowrap w-full h-10"}>
				{headers.map((item, index) => (
					<li key={index} onClick={()=>{
						setActiveHeaderIndex(index)
					}} className={`pb-4 px-4 font-normal relative h-10 cursor-pointer`}>
						{item}
						<div className={`rounded absolute left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-500 transition-all duration-300 bottom-0 ${activeHeaderIndex === index ? " opacity-100 blur-0" : "blur-md  translate-y-4" }`}></div>
					</li>
				))}
			</ul>
			<ul className={"p-4 min-h-[30dvh]"}>
				{contents.map((item, index) => (
					<li key={index}  className={`animate-fadeIn pb-4 px-4 ${index !== activeHeaderIndex ? "hidden" : ""}`} >
						{item}
					</li>
				))}
			</ul>
		</div>
	)
}
export default Tab;