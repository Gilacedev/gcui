import { Meta, StoryObj } from "@storybook/react";
import Call from "./Call";

const meta: Meta<typeof Call> = {
  title: "Components/Call",
  component: Call,
  argTypes: {
    phone: {
      control: "text",
      description: "The phone number to display and dial.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Call>;

export const Default: Story = {
  args: {
    phone: "123-456-7890",
  },
};

export const WithDifferentPhone: Story = {
  args: {
    phone: "987-654-3210",
  },
};
