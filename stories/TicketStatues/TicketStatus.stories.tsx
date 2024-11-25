import { Meta, StoryObj } from "@storybook/react";
import TicketStatus, { StatusProps } from "./TicketStatus";

const meta: Meta<typeof TicketStatus> = {
  title: "Components/TicketStatus",
  component: TicketStatus,
  argTypes: {
    status: {
      control: {
        type: "select",
        options: [0, 1, 2, 3, 4],
      },
      description:
        "Ticket status code (0: closed, 1: open, 2: pending, 3: answered, 4: waiting)",
      defaultValue: 0,
    },
  },
};

export default meta;

type Story = StoryObj<typeof TicketStatus>;

export const Closed: Story = {
  args: {
    status: 0,
  },
};

export const Open: Story = {
  args: {
    status: 1,
  },
};

export const Pending: Story = {
  args: {
    status: 2,
  },
};

export const Answered: Story = {
  args: {
    status: 3,
  },
};

export const Waiting: Story = {
  args: {
    status: 4,
  },
};
