import React from "react";
import NotificationBox from "@/gcui-main/NotificationBox";
import Tab from "@/stories/Tab/Tab";

export default {
  title: "Components/NotificationBox",
  component: NotificationBox,
};

const notifBox = (args) => <NotificationBox {...args} />;

// Custom scenario with additional controls if needed
export const CustomHeaders = () => {
  const customHeaders = [
    <div key={1} className={"flex gap-2"}>
      <span>Custom Unseen</span>
    </div>,
    <div key={2} className={"flex gap-2"}>
      <span>Custom Archive</span>
    </div>,
  ];

  return (
    <div className="bg-gray-900 p-4">
      <Tab
        headers={customHeaders}
        contents={[
          <div key={1} id={"unseen"}>
            Custom Content for Unseen
          </div>,
          <div key={2} id={"archive"}>
            Custom Content for Archive
          </div>,
        ]}
      />
    </div>
  );
};
