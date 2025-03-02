/*
<meta name="description" content="A beautifully crafted React component that animates a number from 0 to a given maximum, using your custom numberFixer function with a fallback for unformatted values.">
*/

"use client";
import { useEffect, useState } from "react";
import { numberFixer } from "@/components/functions/String";

interface NumberIncrementorProps {
	maxNumber?: number;
	speed?: number;
}

const NumberIncrementor = ({
																 maxNumber = 1000,
																 speed = 100,
															 }) => {
	const [resultNumber, setResultNumber] = useState(0);

	useEffect(() => {
		if (resultNumber < maxNumber) {
			const timer = setTimeout(() => {
				setResultNumber((prev) => {
					const nextNumber = prev + speed;
					return nextNumber > maxNumber ? maxNumber : nextNumber;
				});
			}, 50); // 50ms delay for a smooth transition
			return () => clearTimeout(timer);
		}
	}, [resultNumber, maxNumber, speed]);

	// Fallback: if numberFixer returns undefined, display the number as a string.
	const displayNumber = numberFixer(resultNumber) || resultNumber.toString();

	return <span className="number-incrementor">{displayNumber}</span>;
};

export default NumberIncrementor;
