
export default function getCookie(name: string): string | undefined {
	const regex = new RegExp(`(^| )${name}=([^;]+)`);
	console.log("document.cookie", document.cookie);
	const match = document.cookie.match(regex);
	if (match) {
		return match[2];
	}
	return undefined; 
}
