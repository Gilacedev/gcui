import React, { useState } from "react";
import AvatarBox from "./AvatarBox";

export default {
  title: "Components/AvatarBox",
  component: AvatarBox,
};

const avatarBox = (args) => <AvatarBox {...args} />;

export const square = avatarBox.bind({});
square.args = {
  name: "avatar",
  type: "square",
  realsize: false,
  label: "Profile Picture",
  onChange: (data) => console.log("Avatar Changed:", data),
};

export const Horizontal = avatarBox.bind({});
Horizontal.args = {
  name: "cover-photo",
  type: "horizontal",
  realsize: true,
  label: "Cover Photo",
  onChange: (data) => console.log("Cover Photo Updated:", data),
};

export const Vertical = avatarBox.bind({});
Vertical.args = {
  name: "vertical-photo",
  type: "vertical",
  realsize: true,
  label: "Vertical Photo",
  onChange: (data) => console.log("Vertical Photo Updated:", data),
};

export const Custom = avatarBox.bind({});
Custom.args = {
  name: "custom-avatar",
  type: "custom",
  w: 500,
  h: 300,
  realsize: false,
  label: "Custom Size Avatar",
  onChange: (data) => console.log("Custom Avatar Updated:", data),
};
