import { Meta, StoryFn } from "@storybook/react";
import ColorTypes from "../../gcui-main/functions/ColorTypes";
import Button, { ComponentProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    tag: { control: "text" },
    particular: { control: "boolean" },
    icon: { control: "text" },
    color: {
      control: { type: "select" },
      options: [
        ColorTypes.default,
        ColorTypes.primary,
        ColorTypes.danger,
        ColorTypes.success,
        ColorTypes.dark,
        ColorTypes.light,
      ],
    },
    href: { control: "text" },
    type: { control: "text" },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
} as Meta<typeof Button>;

const button: StoryFn<ComponentProps> = (args) => (
  <div className="relative">
    <Button {...args} />
  </div>
);
export const Default = button.bind({});
Default.args = {
  children: "Default Button",
  color: ColorTypes.default,
  loading: false,
  disabled: false,
};

export const Primary = button.bind({});
Primary.args = {
  children: "Primary Button",
  color: ColorTypes.primary,
};

export const Danger = button.bind({});
Danger.args = {
  children: "Danger Button",
  color: ColorTypes.danger,
};

export const Success = button.bind({});
Success.args = {
  children: "Success Button",
  color: ColorTypes.success,
};

export const Dark = button.bind({});
Dark.args = {
  children: "Dark Button",
  color: ColorTypes.dark,
};

export const Light = button.bind({});
Light.args = {
  children: "Dark Button",
  color: ColorTypes.light,
};

export const Loading = button.bind({});
Loading.args = {
  children: "Loading Button",
  loading: true,
};

export const Disabled = button.bind({});
Disabled.args = {
  children: "Disabled Button",
  disabled: true,
};
