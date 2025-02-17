"use client"
import { usePathname } from 'next/navigation'

type ShareProps = {
  animation?: boolean; 
  text?: string | null;
}

const Share: React.FC<ShareProps> = ({ animation, text }) => {
	const pathname = usePathname();
  
	// If navigator or navigator.share is not available, return nothing
	if (typeof navigator === 'undefined' || !navigator.share) {
	  return null;
	}
  
	return (
	  <div
		onClick={() => {
		  try {
			navigator.share({
			  title: document.title,
			  text: text ?? undefined, 
			  url: pathname,
			});
		  } catch (e) {
			// Handle error (optional)
		  }
		}}
		className={`flex cursor-pointer items-center justify-center bg-bg-gilace/50 relative w-12 h-12 md:w-16 md:h-16 ${animation && "animate-onTheEarth"} rounded-xl text-slate-50`}
	  >
		<span className={"far fa-arrow-up-from-bracket md:text-3xl text-xl"}></span>
		<div className={"w-12 h-12 md:w-16 md:h-16 absolute rounded-xl animate-ping shadow-[0_0_25px_rgba(0,0,0,0.3)] shadow-violet-400 border-violet-700"}></div>
	  </div>
	);
  }
  
export default Share;
