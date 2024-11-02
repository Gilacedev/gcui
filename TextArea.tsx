import React from "react";
import Loader from "@/components/Loader";

interface inputProps {
	icon ?: React.ReactNode,
	ltr?: boolean | undefined,
	loading?: boolean | undefined,
	className?: string,
	disabled?: boolean | undefined,
	[propName: string]: any;
}

const TextArea:React.FC<inputProps> = ({...props}) => {
	let isLtr = props.ltr ?? false;
	delete props.ltr;
	let loading = props.loading ? true : false;
	return (<div className={`relative border-slate-900 bg-slate-800 rounded p-2 flex text-slate-200 has-[:disabled]:bg-slate-600 has-[:disabled]:placeholder-slate-400 ${isLtr ?"flex-row-reverse":""}`}>
		<textarea disabled={(props.loading || props.disabled)?true:false} {...props} className={`w-full resize-y bg-transparent outline-none  placeholder-slate-400 disabled:text-slate-400 border-none p-0 m-0 ${isLtr ?"myLtr":""} ${props.className}`} />
		{
			props.icon && props.icon !== "" && !loading &&
			props.icon
		}
		{
			loading &&
            <div className={"h-8 w-8 flex items-center justify-center absolute end-1 top-1"}>
                <div className={"scale-75"}>
                    <Loader />
                </div>
            </div>
		}
	</div>);
}
export default TextArea