import React, {ElementType, HTMLAttributes} from "react";

interface TypoProps extends HTMLAttributes<HTMLOrSVGElement> {
	element?: ElementType;
	className?: string;
}

const H1: React.FC<TypoProps>  = (
	{
		element :  Tag = 'h1',
		children : children,
		...props
	}
) => {
	return <Tag {...props} className={props.className??"text-4xl font-bold"}>{children}</Tag>
}
const H2: React.FC<TypoProps>  = (
	{
		element :  Tag = 'h2',
		children : children,
		...props
	}
) => {
	return <Tag {...props} className={props.className??"text-2xl"}>{children}</Tag>
}
const H3: React.FC<TypoProps>  = (
	{
		element :  Tag = 'h3',
		children : children,
		...props
	}
) => {
	return <Tag {...props} className={props.className??"text-lg font-bold"}>{children}</Tag>
}
const Paragraph: React.FC<TypoProps>  = (
	{
		element :  Tag = 'p',
		children : children,
		...props
	}
) => {
	return <Tag {...props} className={props.className??"text-base leading-6"}>{children}</Tag>
}

export {H1,H2,H3,Paragraph}