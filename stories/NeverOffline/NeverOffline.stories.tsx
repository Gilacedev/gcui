import React from "react";
import NeverOffline from "./NeverOffline";

export default {
  title: "Components/NeverOffline",
  component: NeverOffline,
};

const neveroffline = (args) => <NeverOffline {...args} />;

export const Default = neveroffline.bind({});
Default.args = {};
