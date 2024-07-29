import React from "react";

interface TypoProps {
	children: React.ReactNode | string;
	element?: string;
	className?: string;
}
const H1 = (props: Readonly<TypoProps>) => {
	let Tag = props.element || "h1"
	return <Tag {...props} className={props.className??"text-4xl font-bold"}>{props.children}</Tag>
}
const H2 = (props: Readonly<TypoProps>) => {
	let Tag = props.element || "h2"
	return <Tag {...props} className={props.className??"text-2xl"}>{props.children}</Tag>
}
const H3 = (props: Readonly<TypoProps>) => {
	let Tag = props.element || "h3"
	return <Tag {...props} className={props.className??"text-lg font-bold"}>{props.children}</Tag>
}
const Paragraph = (props: Readonly<TypoProps>) => {
	let Tag = props.element || "p"
	return <Tag {...props} className={props.className??"text-base leading-6"}>{props.children}</Tag>
}

export {H1,H2,H3,Paragraph}