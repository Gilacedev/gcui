
"use client";
import Button from "@/components/Button";
import ColorTypes from "@/components/functions/ColorTypes";

const Call: React.FC<{ phone: string; }> = ({ phone }) => {
	return (
		<Button color={ColorTypes.default} tag={"a"} href={`tel:${phone}`} icon={<span className={"far fa-phone"} />}>
			{phone}
		</Button>
	);
};

export default Call;
