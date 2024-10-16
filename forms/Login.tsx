"use client"
import Language from "@/locales/Language";
import Input from "@/components/Input";
import Button from "@/components/Button";
import {setLogin} from "@/models/AuthModel";
import Loader from "@/components/Loader";
import {useState} from "react";
import {ToastStores} from "@/components/stores/ToastStore";

const Login	= ({onSuccess=undefined}) => {
	const [loading, setLoading] = useState(false);
	const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		//get form data
		//send to server
		let data = new FormData(e.currentTarget);
		let mobile = data.get("mobile");
		let result = await setLogin({mobile});
		setLoading(false);

		if(result) {
			//redirect to dashboard
			if(onSuccess && typeof onSuccess === "function") {
				return onSuccess();
			}
		}

	}
	return (
		<div className={"flex flex-col gap-2"}>
			<div className={"border-b border-black border-opacity-10"}></div>
			<div>
				<form onSubmit={(e)=>{onSubmit(e)}}>
					<Input required={true} type={"tel"} inputMode="numeric" pattern="09[0-9]{9}" icon={<span className='far fa-mobile-retro text-indigo-500' />} placeholder={Language().mobile} ltr={true}  />
					<label className={"text-xs text-slate-500 text-end block pt-2 pb-6"}>
						{Language().mobileHint}
					</label>
					<div className={"grid grid-cols-2"}>
						<Button disabled={loading} particular={true} className={"justify-evenly"} color={"primary"} icon={<span className={"far fa-chevron-left"} /> } type={"submit"}>
							{
								loading
								?
								<Loader  />
								:
								Language().continue
							}
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
export default Login;