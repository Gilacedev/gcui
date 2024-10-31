import colorTypes from "./functions/ColorTypes";
interface BadgeProps {
	color?: colorTypes;
	children: React.ReactNode;
	particular ?: boolean;
}
const Badge = (props:BadgeProps)=> {

	let color = ""
	if (props.color === colorTypes.default) {
		color= "bg-slate-700"
	}
	else if (props.color === colorTypes.primary) {
		color = "bg-violet-600"
	}
	else if (props.color === colorTypes.danger) {
		color = "bg-red-500"
	}
	else if (props.color === colorTypes.success) {
		color = "bg-teal-500"
	}
	else {
		color = "bg-slate-700"
	}
	if (props.particular) {
		color += " particular"
	}
	return <div className={`${color} text-white text-center leading-4 p-2 rounded-2xl text-xs relative`}>
		{props.children}
		{
			props.particular &&
			<div>
				<i></i>
				<i></i>
				<i></i>
			</div>
		}
	</div>
}
export default Badge;