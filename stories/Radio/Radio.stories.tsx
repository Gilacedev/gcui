import Radio from "./Radio";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  argTypes: {
    name: {
      control: "text",
      description: "The name attribute for the radio input",
    },
    children: {
      control: "text",
      description: "The label text for the radio button",
    },
    defaultChecked: {
      control: "boolean",
      description: "Whether the radio button is checked by default",
    },
    onChange: {
      action: "changed",
      description: "Callback function when the radio button state changes",
    },
  },
};

export default meta;

type radio = StoryObj<typeof Radio>;

export const Default: radio = {
  args: {
    name: "example",
    children: "Radio Option",
    defaultChecked: false,
  },
};

export const Checked: radio = {
  args: {
    name: "example",
    children: "Checked Option",
    defaultChecked: true,
  },
};
