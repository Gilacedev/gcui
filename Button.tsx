import ColorTypes from "./functions/ColorTypes";
import React, {ElementType, HTMLAttributes} from 'react';

interface ComponentProps extends HTMLAttributes<HTMLOrSVGElement> {
	tag?: ElementType;
	particular?: boolean;
	icon?: React.ReactNode;
	color?: string;
	href?: string;
}

const Button: React.FC<ComponentProps> = (
	{
		tag :  Tag = 'button',
		children : children,
		particular : particular,
		icon : icon,
		...props}
) => {
	const color = props.color || ColorTypes.default
	let className = "text-slate-50 h-10 px-4 rounded-xl  items-center transition-all  inline-flex gap-4"
	if (color === ColorTypes.default) {
		className += " text-base bg-slate-700 active:bg-slate-500 disabled:bg-slate-300"
	} else if (color === ColorTypes.primary) {
		className += " text-base bg-indigo-500 active:bg-indigo-600 disabled:bg-indigo-300"
	} else if (color === ColorTypes.danger) {
		className += " text-base bg-pink-500 active:bg-pink-600 disabled:bg-pink-300"
	} else if (color === ColorTypes.success) {
		className += " text-base bg-green-500 active:bg-green-600 disabled:bg-green-300"

	} else if (color) {
		className += ` text-base bg-${color}-500 active:bg-${color}-600 disabled:bg-${color}-300 `
	}

	let particularium: string | React.ReactNode = ""
	if (particular) {
		className += " relative particular"
		particularium = <div><i></i> <i></i> <i></i></div>
	}
	return (
		<Tag {...props} className={className}>
			{children}
			{
				icon
			}
			{
				particularium
			}
		</Tag>
	);
}
export default Button