import ColorTypes from "@/components/functions/ColorTypes";
import React from "react";

interface ButtonProps {
	color?: ColorTypes;
	tag?: string;
	icon?: React.ReactNode;
	children?: React.ReactNode;
	particular?: boolean;
}
const Button = (props: Readonly<ButtonProps>) => {
	const color = props.color || ColorTypes.default
	const Tag = props.tag || "button";

	let className = "text-slate-50 h-10 px-4 rounded-xl  items-center transition-all  inline-flex gap-4"
	if (color === ColorTypes.default) {
		className+= " text-base bg-slate-700 active:bg-slate-500 disabled:bg-slate-300"
	}
	else if (color === ColorTypes.primary) {
		className += " text-base bg-indigo-500 active:bg-indigo-600 disabled:bg-indigo-300"
	}
	else if (color === ColorTypes.danger) {
		className += " text-base bg-pink-500 active:bg-pink-600 disabled:bg-pink-300"
	}
	else if (color === ColorTypes.success) {
		className += " text-base bg-green-500 active:bg-green-600 disabled:bg-green-300"

	}
	else if (color) {
		className += ` text-base bg-${color}-500 active:bg-${color}-600 disabled:bg-${color}-300 `
	}

	let particular:string|React.ReactNode = ""
	if(props.particular)
	{
		className += " relative particular"
		particular = <div> <i></i> <i></i> <i></i> </div>
	}
	let { particular:boolean, ...newProps } = props;
	return (
		<Tag {...newProps} className={className}>
		  {props.children}
		  {
			  props.icon && props.icon !== "" &&
			  props.icon
		  }
		  {
			  particular
		  }
		</Tag>
	);
}
export default Button