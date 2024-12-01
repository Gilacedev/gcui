"user server";
import { headers} from "next/headers";

export default async function  Device() {
	//console.log("Device function called",headers())
	const userAgent = await headers();
	const device = await userAgent.get("user-agent")
	return  !!device.match(
		/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
	)

}