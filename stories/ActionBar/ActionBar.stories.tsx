import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ActionBar from "./ActionBar";

const meta: Meta<typeof ActionBar> = {
  title: "Components/ActionBar",
  component: ActionBar,
};

export default meta;

type Story = StoryObj<typeof ActionBar>;

export const Default: Story = {
  args: {},
};
