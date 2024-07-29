

const Radio = (props) => {
    return (
        <label className={`    flex items-center p-1 cursor-pointer`}>
            <input {...props} className={`opacity-0 w-0 overflow-hidden h-0 peer cursor-pointer`} type={"radio"} id={`radio_${props.name}`}/>
            <div className={" w-4 h-4 rounded-full bg-slate-300 peer-checked:bg-indigo-500  peer-checked:shadow-lg peer-checked:shadow-indigo-500 transition-all"}></div>
        </label>
    )
}
export default Radio