import React from "react";

interface blockProps {
	particular?: boolean,
	children?: React.ReactNode | string,
	className?: string
}

const Gradient:React.FC<blockProps> = ({...props})=>{
	return (
		<div className={`relative p-2 bg-linear-45 from-slate-800 to-slate-900 rounded-xl ${props.className} ${props.particular?"particular":""}`}>
			{props.children}
			{
				props.particular &&
				<div>
					<i></i>
					<i></i>
					<i></i>
					<i></i>
					<i></i>
					<i></i>
				</div>
			}
		</div>)
}
const Bordered:React.FC<blockProps> = ({...props})=>{
	/* Rectangle 3 */
	return (
		<div className={`relative p-4 border border-dashed border-slate-700 rounded-xl ${props.className} ${props.particular?"particular":""}`}>
			{props.children}
			{
				props.particular &&
                <div>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
			}

		</div>)
}
const Dark:React.FC<blockProps> = ({...props})=>{
	return (
		<div className={`relative p-4 bg-slate-950/30 rounded-xl mx-2 lg:mx-0 text-slate-50 ${props.className} ${props.particular?"particular":""}`}>
			{props.children}
			{
				props.particular &&
				<div>
					<i></i>
					<i></i>
					<i></i>
					<i></i>
					<i></i>
					<i></i>
				</div>
			}

		</div>)

}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	Gradient,
	Bordered,
	Dark
};