import colorTypes from "@/components/functions/ColorTypes";
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
		color = "bg-indigo-600"
	}
	else if (props.color === colorTypes.danger) {
		color = "bg-pink-500"
	}
	else if (props.color === colorTypes.success) {
		color = "bg-green-500"
	}
	else {
		color = "bg-slate-700"
	}
	if (props.particular) {
		color += " particular"
	}
	return <div className={`${color} text-white px-2 py-1 rounded-2xl text-xs relative`}>
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