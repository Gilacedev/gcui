"use client";
import React from "react";

interface SwitchProps {
  name: string;
  [propName: string]: any;
}

const Switch: React.FC<SwitchProps> = ({ ...props }) => {

  return (
    <label
      className="relative w-14 h-8 rounded-full overflow-hidden flex items-center p-1 cursor-pointer"
    >
      <input
        defaultChecked={props.defualtchecked}
        onChange={props.onChange}
        {...props}
        className="opacity-0 w-0 overflow-hidden h-0 peer cursor-pointer"
        type="checkbox"
        id={`switch_${props.name}`}
      />
      <div
        className="absolute w-full h-full left-0 top-0 bg-slate-700 peer-checked:bg-slate-900 transition-all"
      ></div>
      <div
        className="bg-violet-700 peer-checked:bg-violet-400 w-6 h-6 rounded-full peer-checked:translate-x-6 absolute transition-all start-7"
      ></div>
    </label>
  );
};

export default Switch;
