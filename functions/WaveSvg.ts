import * as flubber from "flubber";

interface WaveSvgProps {
	amplitude: number;
	frequency: number;
	item: SVGPathElement;
}

const waveSvg = ({ amplitude, frequency, item }: WaveSvgProps): void => {
	let paths: string[] = []; 
	const initialPath = "M300,331.72H0V6.71c21.65,0,16.61-4.03,87.17-4.7C157.64,1.34,160.33-.07,206.64,0s82.6,6.71,93.36,6.71v325.01Z";
	function generatePath(amplitude: number, frequency: number, phase: number): string {
		const y1 = amplitude * Math.sin(frequency * 0 + phase);
		const y2 = amplitude * Math.sin(frequency * 1 + phase);
		const y3 = amplitude * Math.sin(frequency * 2 + phase);
		const y4 = amplitude * Math.sin(frequency * 3 + phase);
		const y5 = amplitude * Math.sin(frequency * 4 + phase);
		const y6 = amplitude * Math.sin(frequency * 5 + phase);
		const y7 = amplitude * Math.sin(frequency * 6 + phase);
		const y8 = amplitude * Math.sin(frequency * 7 + phase);

		return `M300,331.72H0V6.71c21.65,${y1},16.61,${-4.03 + y2},87.17,${-4.7 + y3}C157.64,${1.34 + y4},160.33,${-0.07 + y5},206.64,${0 + y6}s82.6,${6.71 + y7},93.36,${6.71 + y8}v325.01Z`;
	}
	async function animate(interpolator: (t: number) => string, element: SVGPathElement): Promise<void> {
		for (let i = 0; i <= 1.1; i += 0.3) {
		  await sleep(30);
		  element.setAttribute("d", interpolator(i));
		}
	  }
	
	  function sleep(time: number): Promise<boolean> {
		return new Promise((resolve) => {
		  setTimeout(() => {
			resolve(true);
		  }, time);
		});
	  }
	function waveIt(element:any) {
		element.setAttribute("d", paths[0]);
		setInterval(() => {
			paths.push(paths.shift()!); 

			let interpolator = flubber.interpolate(paths[0], paths[1]);
			animate(interpolator, element);
		}, 80)
	}

	let tempPath = []
	for (let i = 0; i < 20; i++) {
		const phase = i * 0.9; // Adjust the phase shift for each path
		tempPath.push(generatePath(amplitude, frequency, phase));
	}
	paths = tempPath;
	waveIt(item)

}
export default waveSvg;
