"use client"
import Link from "next/link";
import {useRouter} from "next/navigation";

const TransitionLink = async({ href, children ,...props}) => {

	const router = useRouter();
	const handleTransition = async (e) => {
		e.preventDefault();
		document.querySelector(".page-transition").classList.add("bye")
		router.push(href);
	}
	return(
		<Link prefetch={false} onClick={handleTransition} href={href} {...props}>{children}</Link>
	);
}
export default TransitionLink