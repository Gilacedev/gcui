"use client"
import Language from "@/locales/Language";
import { usePathname } from 'next/navigation'

interface MenuItemProps {
	id:number;
	title?: string;
	icon?: string;
	url?: string;
	isActive?: boolean;
}


const getActiveItem = ({pathname,item}) => {
	if(pathname === "/" && item.url === "/")
	{
		return true
	}
	if(pathname === item.url)
	{
		return true
	}
	//check if item url exist in pathname string:
	return !!(pathname.includes(item.url) && item.url != "/");

}
const MenuItem = ({ item }: { menuElement: MenuItemProps }) => {
	const pathname = usePathname()
	const title:string = Language()[item.title]
	const isUrlExists = getActiveItem({pathname , item})
	return (
		<a href={item.url} className={`inline-flex items-center gap-2 p-2 box-border hover:border-b-4 border-violet-500 transition-all leading-[3rem] ${isUrlExists && "border-b-4"}`}>
			<span className={`text-slate-400 far fa-${item.icon}`}></span>
			<span className={"text-slate-50"}>{title}</span>
		</a>
	)
}
export default MenuItem