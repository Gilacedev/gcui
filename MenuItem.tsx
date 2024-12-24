"use client"
import Language from "@/locales/Language";
import { usePathname } from 'next/navigation'
import TransitionLink from "@/components/TransitionLink";
import Menu from "@/types/Menu";

const getActiveItem = ({ pathname, item }: { pathname: string; item: Menu }): boolean => {
	if (pathname === "/" && item.url === "/") {
		return true;
	}
	if (pathname === item.url) {
		return true;
	}
	// Check if item URL exists in pathname string:
	return !!(pathname.includes(item.url || "") && item.url !== "/");
};

const MenuItem = ({ item }: { item: Menu }) => {
	const pathname = usePathname();
	const title: string = Language()[item.title || ""];
	const isUrlExists = getActiveItem({ pathname, item });

	return (
		<TransitionLink
			href={item.url || "#"}
			className={`inline-flex items-center gap-2 p-2 box-border hover:border-b-4 border-violet-500 transition-all leading-[3rem] ${
				isUrlExists && "border-b-4"
			}`}
		>
			<span className={`text-slate-400 far fa-${item.icon}`}></span>
			<span className={"text-slate-50"}>{title}</span>
		</TransitionLink>
	);
};

export default MenuItem