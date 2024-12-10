import React from "react";
import Nav from "./Nav"; // Update the path based on your file structure
import { Meta, StoryFn } from "@storybook/react";
import { isMobile } from "react-device-detect";

export default {
  title: "Components/Nav",
  component: Nav,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    isMobile: {
      control: "boolean",
      defaultValue: false,
      description: "Toggles between mobile and desktop view.",
    },
  },
} as Meta<typeof Nav>;

const nav: StoryFn = (args) => (
  <Nav Language={"fa"} menu={undefined} {...args} />
);

export const Desktop = nav.bind({});
Desktop.args = {
  isMobile: true,
};

// export const Mobile = nav.bind({});
// Mobile.args = {
//   isMobile: false,
// };
