import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import InlineMessage, { InlineMessageProps } from "./InlineMessage"; // Adjust the path
import ColorTypes from "../../gcui-main/functions/ColorTypes";

export default {
  title: "Components/InlineMessage",
  component: InlineMessage,
  argTypes: {
    message: { control: "text" },
    color: {
      control: "select",
      options: [
        ColorTypes.default,
        ColorTypes.primary,
        ColorTypes.danger,
        ColorTypes.success,
      ],
    },
  },
} as Meta<typeof InlineMessage>;

const Template: StoryFn<InlineMessageProps> = (args) => (
  <InlineMessage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  message: "This is a default message.",
  color: ColorTypes.default,
};

export const Primary = Template.bind({});
Primary.args = {
  message: "This is a primary message.",
  color: ColorTypes.primary,
};

export const Danger = Template.bind({});
Danger.args = {
  message: "This is a danger message.",
  color: ColorTypes.danger,
};

export const Success = Template.bind({});
Success.args = {
  message: "This is a success message.",
  color: ColorTypes.success,
};

export const DangerLong = Template.bind({});
DangerLong.args = {
  message:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius voluptatum eligendi, quam perferendis consequatur delectus dolor ex temporibus, aspernatur vel deleniti necessitatibus explicabo pariatur! Blanditiis assumenda rem optio amet nam.",
  color: ColorTypes.danger,
};
