import ColorTypes from "@/components/functions/ColorTypes";
import colorTypes from "@/components/functions/ColorTypes";

interface InlineMessageProps {
	message: string;
	color:ColorTypes
}
const InlineMessage = ({ message, color }: Readonly<InlineMessageProps>) => {
	return <div className={`p-2 text-xs text-slate-50 rounded-2xl 
	${color === colorTypes.default && "bg-slate-700"}
	${color === colorTypes.primary && "bg-indigo-500"}
	${color === colorTypes.danger && "bg-pink-500"}
	${color === colorTypes.success && "bg-green-500"}
	`}>{message}</div>
}
export default InlineMessage;