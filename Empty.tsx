import { useEffect, useRef } from "react";
import WaveSvg from "@/components/functions/WaveSvg";
import EmptyProps from "@/types/Empty";

const Empty: React.FC<EmptyProps> = ({ message = "", amplitude = 10, frequency = 0.1 }) => {
  let wavingElement = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (wavingElement.current) {
      WaveSvg({
        amplitude: amplitude,
        frequency: frequency,
        item: wavingElement.current,
      });
    }
  }, [amplitude, frequency]);
  
  return (
    <div className={"p-8 flex-col items-center justify-center flex relative"}>
      <div
        className={
          "relative z-[2] w-28 h-28 overflow-hidden border-8 neumorphism-shadow bg-slate-950/30 border-slate-950/0 border-t-0 rounded-full p-2 box "
        }
      >
        <div id="water-container" className={"absolute w-full h-8 left-0 bottom-0 z-[1]"}>
          <svg className="absolute bottom-0 w-full h-full rounded-4xl" preserveAspectRatio="none" viewBox="0 -50 300 350">
            <path className="absolute z-[1] fill-violet-100/15" ref={wavingElement}></path>
          </svg>
        </div>
      </div>
      <div className={"text-slate-500 text-center py-4 text-xs"}>{message}</div>
    </div>
  );
};

export default Empty;
