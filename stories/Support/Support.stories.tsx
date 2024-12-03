import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Support, { SupportProps } from "./Support";
import ColorTypes from "@/gcui-main/functions/ColorTypes";

const meta: Meta = {
  title: "Cards/Support",
  component: Support,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: Object.values(ColorTypes),
      },
    },
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
  },
};

export default meta;

const support: StoryFn<SupportProps> = (args) => <Support {...args} />;

export const Danger = support.bind({});
Danger.args = {
  color: ColorTypes.danger,
  title: "Danger Title",
  description: "This is a danger description.",
};

export const Default = support.bind({});
Default.args = {
  color: ColorTypes.default,
  title: "Default Title",
  description: "This is a default description.",
};

export const Primary = support.bind({});
Primary.args = {
  color: ColorTypes.primary,
  title: "Primary Title",
  description: "This is a primary description.",
};

export const Success = support.bind({});
Success.args = {
  color: ColorTypes.success,
  title: "Success Title",
  description: "This is a success description.",
};

export const Warning = support.bind({});
Warning.args = {
  color: ColorTypes.warning,
  title: "Warning Title",
  description: "This is a warning description.",
};
