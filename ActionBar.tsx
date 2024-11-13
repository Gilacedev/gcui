"use client";


import { usePathname } from 'next/navigation';
import Badge from "@/components/Badge";
import ColorTypes from "@/components/functions/ColorTypes";
import Language from "@/locales/Language";
import ActionBarBasket from "@/components/ActionBarBasket";


const ActionBar = () => {
	const language = Language("common");
	const currentPath = usePathname();

	const items = [
		{ path: '/dashboard/businesses', icon: 'fa fa-briefcase', label: language.businesses },
		{ path: '/dashboard/invoices', icon: 'fa fa-credit-card', label: language.invoices },
		{ path: '/dashboard/invoices', icon: 'fa fa-bell', label: language.events, hasBadge: true, badgeCount: 2 },
		{ path: '/dashboard/support', icon: 'fa fa-headset', label: language.support },
	];

	return (
		<div className="fixed bottom-2 left-4 rounded-2xl w-[calc(100dvw-2rem)] bg-violet-900 bg-opacity-20 backdrop-blur-3xl h-16 text-slate-300 z-40">
			<ul className="flex justify-stretch">
				{items.map((item, index) => (
					<li key={index} className="w-1/5 border-l border-slate-300 border-opacity-10 relative">
						<a
							href={item.path}
							className={`flex gap-2 flex-col items-center justify-center h-16 ${
								currentPath === item.path ? 'border-b-4 border-violet-400' : ''
							}`}
						>
							<span className={`${item.icon} ${currentPath === item.path ? 'text-violet-400' : 'text-slate-400'}`}></span>
							<span className="text-xs">{item.label}</span>
						</a>
						{item.hasBadge && (
							<div className="absolute -top-2 left-1/2">
								<Badge color={ColorTypes.danger}>{item.badgeCount}</Badge>
							</div>
						)}
					</li>
				))}
				<li className="w-1/5 border-l border-slate-300 border-opacity-10 relative">
					<ActionBarBasket />
				</li>
			</ul>
		</div>
	);
};

export default ActionBar;
