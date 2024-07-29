export default function Input(props) {
	return (<div className={`border-slate-200 bg-slate-50 rounded p-2 h-10 flex items-center justify-between gap-2 text-slate-700 has-[:disabled]:bg-slate-300 has-[:disabled]:placeholder-slate-400 ${props.ltr ?"flex-row-reverse":""}`}>
		<input {...props} className={`w-full bg-transparent outline-none text-slate-700 placeholder-slate-400 disabled:text-slate-400 border-none p-0 m-0 ${props.ltr ?"text-left":""}`} style={props.ltr ? {direction:"ltr"} : {}} />
		{
			props.icon && props.icon !== "" &&
			props.icon
		}
	</div>);
}