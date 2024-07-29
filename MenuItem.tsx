interface MenuItemProps {
	title?: string;
	icon?: string;
	url?: string;
	isActive?: boolean;
}

const MenuItem = ({ title,icon,url,isActive }: MenuItemProps) => {
	return (
		<a href={url} className={`inline-flex items-center gap-2 p-2 box-border hover:border-b-4 border-pink-500 transition-all leading-[3rem] ${isActive && "border-b-4"}`}>
			<span className={`text-slate-400 ${icon}`}></span>
			<span className={"text-slate-50"}>{title}</span>
		</a>
	)
}
export default MenuItem