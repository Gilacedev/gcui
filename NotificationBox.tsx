import Language from "@/locales/Language";
import Tab from "./Tab";

const NotificationBox = () => {
  return (
    <div className="bg-slate-800 rounded-2xl p-2 py-4">
      {/* Tabs for Unseen and Archive */}
      <Tab
        headers={[
          <div key={1} className="flex gap-2">
            <span>{Language()["unseen"]}</span>
          </div>,
          <div key={2} className="flex gap-2">
            <span>{Language()["archive"]}</span>
          </div>,
        ]}
        contents={[
          <div key={1} id="unseen">
            {/* Add unseen notifications content here */}
          </div>,
          <div key={2} id="archive">
            {/* Add archive notifications content here */}
          </div>,
        ]}
      />
    </div>
  );
};

export default NotificationBox;
