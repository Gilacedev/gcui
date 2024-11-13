import Image from "@/components/Image";
import Button from "@/components/Button";
import Language from "@/locales/Language";
import Blocks from "@/components/Blocks";
import ColorTypes from "@/components/functions/ColorTypes";

const Business = ({business, editable = false}) => {
	return (
		<Blocks.Dark className={"p-4 rounded-2xl"}>
			<div className={"rounded-2xl rounded-tl-[100px] bg-slate-900 bg-opacity-60 absolute z-[2] top-0 left-0 w-full h-full backdrop-blur-3xl"}></div>
			<div className={"absolute top-3 left-3 "}>
				{
					business._status == 1 &&
                    <span className={"text-teal-500 ps-2 far fa-check"}></span>
				}
				{
					business._status == 2 &&
                    <span
                        className={"text-slate-400 text-4xl fa-sharp fa fa-cog fa-spin"}></span>
				}
				{
					business._status == 3 &&
                    <span>
						<span>
							{Language().business_under_review}
						</span>
						<span className={"text-slate-400 text-2xl fas fa-eye fa-fade"}></span>
					</span>
				}
			</div>
			<div className={"flex flex-col gap-4 relative z-[3]"}>
			<div className={"flex items-center  gap-2"}>
					<div className={"w-16 h-16 bg-slate-400 rounded-full overflow-hidden"}>
						<Image
							src={business.avatar ? process.env.NEXT_PUBLIC_UPLOAD_URL + business.avatar : "/assets/images/image-placeholder.svg"
							} alt={"business"} type={"cover"}/>
					</div>
					<div>
						<div className={"font-bold "}>
							{business.name}
						</div>
						<div className={"text-xs text-slate-400"}>
							{business.website ?? ""}
						</div>
					</div>

				</div>
				{
					editable &&
                    <div className={"flex justify-between w-full gap-2"}>
                        <Button className={"flex"} color={ColorTypes.primary} tag={"a"}
                                href={`/management/business/${business.id}`}>
						<span>
							{Language().management}
						</span>
                            <span className={"far fa-briefcase"}></span>
                        </Button>
                        <Button color={ColorTypes.default} tag={"a"} href={`/management/business/edit/${business.id}`}>
                            <span className={"far fa-edit"}></span>
                        </Button>

                    </div>
				}

			</div>
		</Blocks.Dark>
	)
}
export default Business;