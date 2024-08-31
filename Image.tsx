"use client";
import {useEffect, useRef, useState} from "react";

type ImageProps = {
	src: string;
	alt: string;
	type: "cover" | "contain";
}
const Image = ({src, alt, type}: ImageProps) => {
	const [loading, setLoading] = useState(true)
	const imgRef = useRef<HTMLImageElement | null>(null);
	useEffect(() => {
		if (imgRef.current?.complete) {
			setLoading(false)
		}
	}, []);

	return (
		<div className={`w-full h-full  relative rounded-[inherit] ${loading ? "bg-slate-700 bg-opacity-50" : ""}`}>
			<img ref={imgRef} onLoad={() => {
				setLoading(false)
			}}
				className={`w-full h-full transition-all duration-1000 ${type === "cover" ? "object-cover" : "object-contain"} ${loading ? "opacity-0 scale-75" : "opacity-100 scale-100" }`}
				src={src} alt={alt}/>
			<div
				className={`absolute border-2 border-slate-300 border-opacity-30 rounded-full particular w-6 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${loading ? "block" : "hidden"}`}>
				<i/>
			</div>
		</div>
	);
}
export default Image