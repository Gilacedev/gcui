import React from "react";
import Loader from "@/components/Loader";

interface inputProps {
	icon ?: React.ReactNode,
	ltr?: boolean | undefined,
	[propName: string]: any;
}

 const Input:React.FC<inputProps> = ({...props}) => {
	let isLtr = props.ltr ?? false;
	delete props.ltr;
	let loading = props.loading ? true : false;
	return (<div className={`border-slate-200 bg-slate-50 rounded p-2 h-10 flex items-center justify-between gap-2 text-slate-700 has-[:disabled]:bg-slate-300 has-[:disabled]:placeholder-slate-400 ${props.ltr ?"flex-row-reverse":""}`}>
		<input disabled={(props.loading || props.disabled)?true:false} {...props} className={`w-full bg-transparent outline-none text-slate-700 placeholder-slate-400 disabled:text-slate-400 border-none p-0 m-0 ${props.ltr ?"myLtr":""}`} />
		{
			props.icon && props.icon !== "" && !loading &&
			props.icon
		}
		{
			loading &&
			<div className={"h-8 w-8 flex items-center justify-center"}>
				<div className={"scale-75"}>
					<Loader />
				</div>
			</div>
		}
	</div>);
}
export default Input