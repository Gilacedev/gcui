import { Meta, StoryFn } from "@storybook/react";
import ColorTypes from "../../gcui-main/functions/ColorTypes";
import Badge, { BadgeProps } from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    color: {
      control: { type: "select" },
      options: [
        ColorTypes.default,
        ColorTypes.primary,
        ColorTypes.danger,
        ColorTypes.success,
        ColorTypes.dark,
      ],
    },
    children: { control: "text" },
    particular: { control: "select" },
  },
} as Meta<typeof Badge>;

const badge: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

export const Default = badge.bind({});
Default.args = {
  color: ColorTypes.default,
  children: "",
};

export const Primary = badge.bind({});
Primary.args = {
  color: ColorTypes.primary,
  children: "",
};

export const Danger = badge.bind({});
Danger.args = {
  color: ColorTypes.danger,
  children: "",
};

export const Success = badge.bind({});
Success.args = {
  color: ColorTypes.success,
  children: "",
};
