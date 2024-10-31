export default function getCookie(name)
{
	const regex = new RegExp(`(^| )${name}=([^;]+)`)
	console.log("document.cookie",document.cookie)
	const match = document.cookie.match(regex)
	if (match) {
		return match[2]
	}
}
