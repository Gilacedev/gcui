import Image from "@/components/Image";
import Button from "@/components/Button";
import Language from "@/locales/Language";
import Blocks from "@/components/Blocks";

const Business = ({business, editable = false}) => {
	console.log("business", business)
	return (
		<Blocks.Dark className={"p-4 rounded-2xl text-center flex flex-col gap-4"}>
			<div className={"font-bold"}>
				{business.name}
				{
					business._status &&
					<span className={"text-green-400 ps-2 far fa-check"}></span>
				}
			</div>
			<div className={"text-xs text-slate-400"}>
				{business.website ?? ""}
			</div>
			<div className={"w-32 h-32 bg-slate-400 rounded-full overflow-hidden m-auto"}>
				<Image
					src={business.avatar ? process.env.NEXT_PUBLIC_UPLOAD_URL + business.avatar : "/assets/images/image-placeholder.svg"
					} alt={"business"} type={"cover"}/>
			</div>
			{
				editable &&
                <Button color={"default"} tag={"a"} href={`/management/business/edit/${business.id}`}>
					<span>
						{Language().management}
					</span>
                    <span className={"far fa-edit"}></span>
                </Button>
			}
		</Blocks.Dark>
	)
}
export default Business;