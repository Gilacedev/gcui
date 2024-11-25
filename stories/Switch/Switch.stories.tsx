import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Switch, { switchProps } from "./Switch"; // Update with your actual path

export default {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    name: { control: "text" },
    checked: { control: "boolean" },
  },
} as Meta<typeof Switch>;

const SWITCH: StoryFn<switchProps> = (args) => <Switch {...args} />;

export const Default = SWITCH.bind({});
Default.args = {
  name: "defaultSwitch",
};
