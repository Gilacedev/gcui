"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
const PageTransition = () => {
	const pathname = usePathname();

	useEffect(() => {
		try {
			const pageTransitionElement = document.querySelector(".page-transition");
			if (!pageTransitionElement) {
				console.warn("Page transition element not found");
				return;
			}

			pageTransitionElement.classList.add("bye");
			setTimeout(() => {
				pageTransitionElement.classList.replace("bye", "bying");
			}, 100);
			setTimeout(() => {
				pageTransitionElement.classList.remove("bying");
				pageTransitionElement.classList.remove("bye");
			}, 600);
		} catch (e) {
			console.log(e);
		}
	}, [pathname]);

	return (
		<div className="page-transition bye group">
			<div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
				<div className="relative rounded-full particular w-56 h-56">
					<i />
					<i />
					<i />
					<i />
					<i />
					<i />
				</div>
				<div className="w-40 h-40 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
					<div className="group-[.bying]:animate-(--animate-bounce-to-bottom) animate-(--animate-bounce-from-bottom) animation-fill-forwards">
						<div className="animate-(--animate-damping-swing)">
							<div className={"w-40 h-40"}>
								<img src="/assets/images/gilace-logo.svg" loading={"eager"} fetchPriority={"high"} alt="شرکت طراحی وبسایت گیلاس"/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="group-[.bying]:opacity-0 group-[.bye]:opacity-100 opacity-0 transition-all duration-500 top-0 left-2 w-full h-full z-10 bg-slate-950/10 backdrop-blur-3xl"></div>
		</div>
	);
};

export default PageTransition;
