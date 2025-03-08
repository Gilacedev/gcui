'use client';

import ColorTypes from "./functions/ColorTypes";
import React, { ElementType, HTMLAttributes } from 'react';
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ComponentProps extends HTMLAttributes<HTMLOrSVGElement> {
  tag?: ElementType;
  particular?: boolean;
  icon?: React.ReactNode;
  color?: ColorTypes | string;
  href?: string;
  type?: string;
  loading?: number;
  disabled?: boolean;
}

const Button: React.FC<ComponentProps> = ({
  tag: Tag = 'button',
  children,
  particular,
  icon,
  ...props
}) => {
  const router = useRouter();
  const color = props.color || ColorTypes.default;
  let loading = props.loading ? true : false;
  const disabled = props.disabled || false; // Handle disabled prop here

  let className = "relative text-slate-50 h-10 px-4 rounded-xl  items-center transition-all  origin-center duration-300  inline-flex gap-4 whitespace-nowrap active:scale-y-95 active:scale-x-105 active:shadow-none ";

  // Color class assignments
  if (color === ColorTypes.default) {
    className += "text-base bg-slate-700 active:bg-slate-500 disabled:bg-slate-300 shadow-black/10 shadow-lg hover:shadow-xl hover:shadow-black/20 cursor-pointer";
  } else if (color === ColorTypes.primary) {
    className += "text-base bg-bg-gilace active:bg-violet-600 shadow-violet-800/30 shadow-lg hover:shadow-xl hover:shadow-violet-800/40   disabled:bg-violet-300";
  } else if (color === ColorTypes.danger) {
    className += "text-base bg-violet-500 active:bg-violet-600 disabled:bg-violet-300";
  } else if (color === ColorTypes.success) {
    className += "text-base bg-green-500 active:bg-green-600 disabled:bg-green-300";
  } else if (color === ColorTypes.dark) {
    className += "text-base bg-slate-900 active:border border-indigo-600 disabled:bg-slate-300";
  } else if (color === ColorTypes.light) {
    className += "text-base bg-indigo-600 disabled:bg-slate-300";
  } else if (color) {
    className += `text-base bg-${color}-500 active:bg-${color}-600 disabled:bg-${color}-300 `;
  }

  let particularium: string | React.ReactNode = "";
  if (particular) {
    className += "relative particular";
    particularium = (
      <div className={"flex-grow-0"}>
        <i></i> <i></i> <i></i>
      </div>
    );
  }

 
  if (props.href && !disabled) {
    return (
      <Link
        {...props}
        className={className}
        href={props.href}  // Pass href directly if it's valid
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(".page-transition")?.classList.add("bye");
          router.push(props.href as string);
        }}
      >
        {!loading && children}
        {!loading && icon}
        {!loading && particularium}
        {loading && <Loader />}
      </Link>
    );
  }

  
  return (
    <Tag
      {...props}
      className={className}
      disabled={disabled || false}
    >
      {!loading && children}
      {!loading && icon}
      {!loading && particularium}
      {loading && <Loader />}
    </Tag>
  );
};

export default Button;
