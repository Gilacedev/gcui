import {H2, Paragraph} from "@/components/Typo";
import Button from "@/components/Button";
import Blocks from "@/components/Blocks";

interface AlertMessageProps {
	icon?: React.ReactNode;
	title?: string;
	description?: string;
	url?: string;
	reactionText?: string;
}
const AlertMessage = ({icon,title,description,url,reactionText}:AlertMessageProps) => {
	return (
		<Blocks.Dark>
			<div className={" gap-4 flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-stretch"}>
				{
					icon &&
                    <div className={"text-4xl text-indigo-500"}>
						{icon}
                    </div>
				}
				<div className={"w-full"}>
					<H2 element={"div"}>
						{title}
					</H2>
					<Paragraph className={"text-slate-400"} element={"p"}>
						{description}
					</Paragraph>
				</div>
				{
					url &&
                    <div>
                        <Button tag={"a"} href={url} icon={<span className={"far fa-chevron-left"}/>}>
							{reactionText}
                        </Button>
                    </div>
				}

			</div>
		</Blocks.Dark>
	)
}
export default AlertMessage