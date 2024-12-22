import Button from "@/components/Button";
import ColorTypes from "@/components/functions/ColorTypes";
import Language from "@/locales/Language";
import ConfirmProps from "@/types/ConfirmType";
import React, { useEffect, useRef } from "react";


const Confirm: React.FC<ConfirmProps> = ({ message, onConfirm, children }) => {
  const [checked, setChecked] = React.useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setChecked(false);
    }
  };

  useEffect(() => {
    if (checked) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [checked]);

  return (
    <div className={"relative pointer-events-auto"} ref={ref}>
      <input
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
        type={"checkbox"}
        className={"peer hidden"}
      />
      <div
        className={`backdrop-blur-3xl transition-all origin-bottom-right rounded-2xl bg-slate-950 bg-opacity-20 p-4 absolute bottom-full 
                opacity-0 scale-0  
                peer-checked:opacity-100 peer-checked:scale-100`}
      >
        <div className={"pb-2"}>{message}</div>
        <div className={"flex gap-2"}>
          <div>
            <Button
              color={ColorTypes.primary}
              onClick={() => {
                setChecked(false);
              }}
            >
              {Language().no}
            </Button>
          </div>
          <div
            className={"pointer-events-auto"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onConfirm();
              setChecked(false);
            }}
          >
            <Button color={ColorTypes.default} onClick={onConfirm}>
              {Language().yes}
            </Button>
          </div>
        </div>
      </div>
      <div
        onClick={(e) => {
          setChecked(!checked);
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Confirm;
