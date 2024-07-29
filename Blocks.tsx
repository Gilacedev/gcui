const Gradient = (props)=>{
	return (
		<div className={`relative p-2 bg-gradient-to-b from-slate-700 to-slate-800 rounded-xl ${props.className} ${props.particular?"particular":""}`}>
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
const Bordered = (props)=>{
	/* Rectangle 3 */
	return (
		<div className={`relative p-4 border border-dashed border-slate-600 rounded-xl ${props.className} ${props.particular?"particular":""}`}>
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
const Dark = (props)=>{
	return (
		<div className={`relative p-4 bg-slate-900 bg-opacity-50 rounded-xl text-slate-50 ${props.className} ${props.particular?"particular":""}`}>
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