import { headers} from "next/headers";

export default function Device() {
	//console.log("Device function called",headers())
	const userAgent = headers().get("user-agent")
	return  !!userAgent.match(
		/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
	)

}