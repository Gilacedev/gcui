"use client"
import { usePathname } from 'next/navigation'
const Share = ({animation}) => {
	const pathname = usePathname()
	if(typeof navigator === 'undefined' || !navigator.share)
	{
		return
	}

	return (
		<div onClick={()=>{
			try {
				navigator.share({
					title: document.title,
					text: document.getElementsByName('description')[0].getAttribute('content'),
					url: pathname
				})
			}catch (e){

			}
		}} className={`flex cursor-pointer items-center justify-center bg-bg-gilace bg-opacity-50 relative w-12 h-12 md:w-16 md:h-16 ${animation && "animate-onTheEarth"} rounded-xl text-slate-50`}>
			<span className={"far fa-arrow-up-from-bracket md:text-3xl text-xl"}></span>
			<div className={"w-12 h-12 md:w-16 md:h-16 absolute rounded-xl animate-ping shadow-[0_0_25px_rgba(0,0,0,0.3)] shadow-violet-400   border-violet-700"}></div>
		</div>
	);
}
export default Share;