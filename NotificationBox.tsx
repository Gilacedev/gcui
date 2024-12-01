import Language from "@/locales/Language";
import Plans from "./Plans";
import Tab from "./Tab";
import { Paragraph } from "./Typo";

const NotificationBox = () => {
    return (
        <div className="bg-slate-800 rounded-2xl p-2 py-4">
            <Tab headers={[
                <div key={1} className={"flex gap-2"}>
                    <span>{Language()["unseen"]}</span>
                </div>,
                <div key={2} className={"flex gap-2"}>
                    <span>{Language()["archive"]}</span>
                </div>
            ]} contents={[
                <div key={1} id={"unseen"}>
                    
                </div>
                ,
                <div key={2} id={"seen"}>

                </div>
            ]} />

        </div>
    )
}
export default NotificationBox;