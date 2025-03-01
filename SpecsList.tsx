"use client"
import Spec from "@/components/cards/Spec";
import Blocks from "@/components/Blocks";
import Language from "@/locales/Language";
import Input from "@/components/Input";
import {ReactNode, useState} from "react";
import Content from "@/types/Content";
import Button from "@/components/Button";
import {getRelated} from "@/models/ContentModel";

const SpecsList = ({specs}:{specs:any}) =>{
	const [localSpecs,setLocalSpecs] = useState(specs)
	const [page,setPage] = useState(1)
	const [loading,setLoading] = useState(false)
	const [hasMore,setHasMore] = useState(true)

	const localSearch = (e:React.ChangeEvent<HTMLInputElement>) =>{
		let search = e.target.value
		if(!search || search === "")
		{
			setLocalSpecs(specs)
			return
		}
		let newSpecs = specs.data.filter((item:Content)=>{
			if(!item)
			{
				return false
			}
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
	const loadMore = async () =>{
		setLoading(true)
		let newSpecs = await getRelated({slug: "products", content_type: "specs", page: page})
		if(newSpecs.data.length === 0)
		{
			setHasMore(false)
		}
		setLocalSpecs({...specs,data:[...localSpecs.data,...newSpecs.data]})
		setPage(page+1)
		setLoading(false)
	}


	return(		<div>

			<div className={"py-10 sm:block sm:w-96 sticky top-8 z-40"}>
				<Blocks.Dark className={"bg-slate-100 backdrop-blur-md"}>
					<Input onInput={localSearch} className={""} icon={<span className={"far fa-search"} /> as ReactNode} placeholder={Language().specs_search_text}/>
				</Blocks.Dark>
			</div>
				<div className={"py-8 px-2 sm:px-0 relative overflow-x-hidden"}>
					<div
						className={"h-full w-4 rounded-3xl bg-violet-800/30 absolute top-12 left-1/2 -translate-x-1/2"}/>
					<div className={"py-8 px-2 sm:px-0 relative "}>
						{
							localSpecs.data && localSpecs.data.length > 0 &&
							localSpecs.data.map((item:Content, index:number) => {
								if(!item)
								{
									return
								}
								return (<Spec key={index} item={item} direction={index % 2 == 0 ? "odd" : "even"}/>)
							})
						}
					</div>
					<div>
						{
							loading &&
							<div className={"text-center py-4"}>
								<div className={"animate-spin inline-block w-6 h-6 bg-violet-300 rounded-full"}></div>
							</div>
						}
						{
							hasMore &&
							<div className={"text-center py-4"}>
								<Button tag={"button"} onClick={(e) => {
									setLoading(true)
									setPage(page + 1)
									setLoading(false)
								}} className={"bg-violet-300 text-slate-900 p-2 rounded-lg"}>
									<span className={"far fa-chevron-down"}/>
								</Button>
							</div>
						}
					</div>
				</div>
		</div>
	);
}
export default SpecsList