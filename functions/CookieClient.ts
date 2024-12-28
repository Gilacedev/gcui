
export default function getCookie(name: string): string | undefined {
	const regex = new RegExp(`(^| )${name}=([^;]+)`);
	const match = document.cookie.match(regex);
	if (match) {
		return match[2];
	}
	return undefined; 
}
