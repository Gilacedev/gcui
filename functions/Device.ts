export default function Device() {
	if(navigator)
	{
		return (navigator as any).userAgentData?.mobile ?? false;
	}

	return true
}