"use client";
import {useEffect, useRef, useState} from "react";
import NextImage  from 'next/image'

type ImageProps = {
	src: string;
	alt: string;
	type: "cover" | "contain";
	priority?: boolean;
}
const Image = ({src, alt, type ,priority}: ImageProps) => {
	const [loading, setLoading] = useState(true)
	const imgRef = useRef<HTMLImageElement | null>(null);
	useEffect(() => {
		if (imgRef.current?.complete) {
			setLoading(false)
		}
	}, []);

	return (
		<div className={`w-full h-full  relative rounded-[inherit] overflow-hidden  ${loading ? "bg-slate-700/50" : ""}`}>
			<NextImage loading={priority?"eager":"lazy"} fetchPriority={priority?"high":"auto"} width={1024} height={1024} onLoad={() => {
				setLoading(false)
			}}
				className={`w-full h-full transition-all duration-1000 ${type === "cover" ? "object-cover" : "object-contain"} ${loading ? "opacity-0 scale-75" : "opacity-100 scale-100" }`}
				src={src} alt={alt}/>
			<div className={`absolute border-2 border-slate-300/30 rounded-full particular w-6 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${loading ? "block" : "hidden"}`}>
				<i/>
			</div>
		</div>
	);
}
export default Image