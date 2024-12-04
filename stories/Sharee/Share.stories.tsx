import React from "react";
import Share from "./Share";

export default {
  title: "Components/Share",
  component: Share,
  argTypes: {
    animation: { control: "boolean" },
  },
};

const share = (args) => <Share {...args} />;

export const Default = share.bind({});
Default.args = {
  animation: false,
};

export const WithAnimation = share.bind({});
WithAnimation.args = {
  animation: true,
};
