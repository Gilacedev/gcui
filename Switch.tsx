"use client";
const Switch = (props) => {
    return (
        <label className={`relative w-14 h-8 rounded-full overflow-hidden flex items-center p-1 cursor-pointer`}>
            <input {...props} className={`opacity-0 w-0 overflow-hidden h-0 peer cursor-pointer`} type={"checkbox"} id={`switch_${props.name}`}/>
            <div className={`z-10 bg-white w-6 h-6 rounded-full peer-checked:translate-x-6 absolute transition-all start-7`}></div>
            <div className={"absolute w-full h-full left-0 top-0 bg-slate-300 peer-checked:bg-pink-500 transition-all"}></div>
        </label>
    )
}
export default Switch