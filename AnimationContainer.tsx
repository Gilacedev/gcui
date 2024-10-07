"use client";
import React from 'react';
import { useInView } from 'react-intersection-observer';
const AnimationContainer = (
	{children}
)=>{
	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: false,
	});


	return (
		<div
			ref={ref}
			className={`relative overflow-hidden transition-all duration-500 ${
				inView ? "opacity-100 translate-x-0" : "scale-75 rotate-6 opacity-0"
			}`}
		>
			{children}
		</div>
	);
}
export default AnimationContainer