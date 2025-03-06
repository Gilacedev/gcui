import BreadCrumbType from "@/types/BreadCrumb";

const BreadCrumb = ({items}:{items:BreadCrumbType[]})=>
{
	return (<div className={"flex bg-slate-900/20 rounded-lg p-2 items-center text-sm text-slate-400 "}>
		<span className={"text-violet-400"}></span>
		{
			items.map((item,index)=>{
				return (<div key={index}>
					<a href={item.url??""} className={" cursor-pointer hover:text-white flex items-center gap-1"} >
						{
							item.icon && <span className={`far fa-${item.icon}`}></span>
						}
						{
							item.label &&
							<span className={" bg-slate-900/20 rounded-lg cursor-pointer hover:text-white"}>{item.label}</span>
						}
						{
							index < items.length-1 && <span className={"far fa-chevron-left px-3"}></span>
						}
					</a>

				</div>)
			})
		}
	</div>)

}
export default BreadCrumb