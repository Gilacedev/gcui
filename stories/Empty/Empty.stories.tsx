import React from "react";
import Empty from "./Empty";

export default {
  title: "Components/Empty",
  component: Empty,
  argTypes: {
    message: {
      control: "text",
      description: "Message displayed below the circle",
    },
    amplitude: { control: { type: "number" }, description: "Wave amplitude" },
    frequency: { control: { type: "number" }, description: "Wave frequency" },
  },
};

const story = (args) => (
  <div dir="ltr">
    <Empty {...args} />
  </div>
);
export const Default = story.bind({});
Default.args = {
  message: "Loading...",
  amplitude: 20,
  frequency: 1.2,
};
