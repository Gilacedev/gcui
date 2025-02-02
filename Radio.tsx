import React from "react";
import Blocks from "@/components/Blocks";


type RadioProps = {
  id?:string;
  name: string; 
  children: React.ReactNode;
  defaultChecked?: boolean; 
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}

const Radio: React.FC<RadioProps> = ({ name, children, defaultChecked, onChange }) => {
  return (
    <Blocks.Dark>
      <label className={`flex items-center justify-start p-1 cursor-pointer`}>
        <input
            defaultChecked={defaultChecked}
            className={`opacity-0 w-0 overflow-hidden h-0 peer cursor-pointer`}
            type="radio"
            id={`radio_${name}`}
            name={name}
            onChange={onChange}
        />
        <div className={"rounded-full bg-slate-300 peer-checked:bg-indigo-500 peer-checked:shadow-lg peer-checked:shadow-indigo-500 transition-all"}>
          <div className={"w-2 h-2 rounded-full bg-white mx-auto my-1 animate-ping opacity-20"}></div>
          <div className={"w-4"}></div>
        </div>
        <div>{children}</div>
      </label>
    </Blocks.Dark>
  );
};

export default Radio;

