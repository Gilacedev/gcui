import language from "@/locales/Language";
import Button from "@/components/Button";
import Language from "@/locales/Language";
import Input from "@/components/Input";
import Blocks from "@/components/Blocks";
import Loader from "@/components/Loader";

type FormProps = {
	children: any;
	title: string;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	loading: boolean;
	type: "create" | "edit";
};

const Form = ({ children, title , onSubmit ,loading ,type }: FormProps) => {
	return (
		<Blocks.Dark className={"flex flex-col "}>

			<form className={"flex-1"} onSubmit={(e) => {
				e.preventDefault();
				onSubmit(e);
			}}>
				<div
					className={"py-4 border-b border-slate-100/10 flex items-center justify-between sticky top-24 z-[1] rounded-2xl px-4 mb-8 bg-slate-900"}>
					<div className={"text-sm text-teal-500"}>
						{title}
					</div>
					<div>
						<Button type={"submit"} disabled={loading} color={"primary"}
								icon={loading ? <Loader/> : type == "edit" ? <span className={"far fa-pen"}/> :
									<span className={"far fa-plus"}/>}>
							{
								type == "edit" ? Language().edit :
									language().create
							}
						</Button>
					</div>
				</div>

				<div className={` ${loading ? "opacity-50 animate-pulse" : ""}`}>{children}</div>
				{
					type == "edit" &&
					<input name={"_method"} value={"PUT"} type={"hidden"}/>
				}
			</form>

		</Blocks.Dark>
	)
}
export default Form;