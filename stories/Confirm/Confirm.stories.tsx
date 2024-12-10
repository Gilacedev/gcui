import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Confirm from "./Confirm";
import Button from "../Button/Button";
import ColorTypes from "@/gcui-main/functions/ColorTypes";

const meta = {
  title: "Components/Confirm",
  component: Confirm,
  tags: ["autodocs"],
  args: {
    message: "Are you sure you want to proceed?",
  },
  argTypes: {
    message: {
      control: "text",
      description: "Message displayed in the confirmation dialog.",
    },
    onConfirm: {
      action: "confirmed",
      description: "Callback when user confirms the action.",
    },
    children: {
      control: "text",
      description: "Content for the toggle element.",
    },
  },
} as Meta<typeof Confirm>;

export default meta;

type confirm = StoryObj<typeof Confirm>;

export const Default: confirm = {
  args: {
    children: <Button>Click me</Button>,
  },
};

export const CustomMessage: confirm = {
  args: {
    message:
      "Do you really want to delete this item? This action cannot be undone.",
    children: <Button>Delete</Button>,
  },
};

export const ComplexTrigger: confirm = {
  render: (args) => (
    <Confirm {...args}>
      <Button color={ColorTypes.dark}>submit</Button>
    </Confirm>
  ),
  args: {
    message: "Are you absolutely certain about this?",
  },
};
