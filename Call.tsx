
"use client";
import Button from "@/components/Button";
import ColorTypes from "@/components/functions/ColorTypes";

const Call: React.FC<{ phone: string; }> = ({ phone }) => {
	const handleCallClick = () => {
		window.location.href = `tel:${phone}`;
	};
	return (
		<Button color={ColorTypes.default} tag={"span"} onClick={handleCallClick} icon={<span className={"far fa-phone"} />}>
			{phone}
		</Button>
	);
};

export default Call;
