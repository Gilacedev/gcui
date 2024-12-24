"use server";
import { headers } from "next/headers";

export default async function Device() {
	const userAgent = await headers();
	const device = await userAgent.get("user-agent");

	// Check if device is not null and perform the match
	if (device) {
		return !!device.match(
			/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
		);
	}

	// Return false if no device or user-agent is found
	return false;
}
