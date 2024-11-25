import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Ticket from "./Ticket";

interface TicketProps {
  ticket: {
    id: string;
    title: string;
    priority: "low" | "medium" | "high" | "urgent";
    messages_count: number;
    business?: {
      name: string;
    };
    _status: number;
    created_at: string;
  };
}

export default {
  title: "Cards/Ticket",
  component: Ticket,
  argTypes: {
    "ticket.id": {
      control: "text",
      description: "Unique identifier for the ticket",
      defaultValue: "1",
    },
    "ticket.title": {
      control: "text",
      description: "Title of the ticket",
      defaultValue: "Sample Ticket",
    },
    "ticket.priority": {
      control: {
        type: "select",
        options: ["low", "medium", "high", "urgent"],
      },
      description: "Priority level of the ticket",
      defaultValue: "low",
    },
    "ticket.messages_count": {
      control: {
        type: "number",
        min: 0,
      },
      description: "Number of messages associated with the ticket",
      defaultValue: 5,
    },
    "ticket.business.name": {
      control: "text",
      description: "Name of the business associated with the ticket",
      defaultValue: "Sample Business",
    },
    "ticket._status": {
      control: {
        type: "number",
        min: 0,
      },
      description: "Status code of the ticket",
      defaultValue: 1,
    },
    "ticket.created_at": {
      control: "date",
      description: "Creation date of the ticket",
      defaultValue: new Date().toISOString(),
    },
  },
} as Meta<typeof Ticket>;

const Template: StoryFn<TicketProps> = (args) => <Ticket {...args} />;

export const Default = Template.bind({});
Default.args = {
  ticket: {
    id: "1",
    title: "Sample Ticket",
    priority: "low",
    messages_count: 5,
    business: { name: "Sample Business" },
    _status: 1,
    created_at: new Date().toISOString(),
  },
};

export const LowPriority = Template.bind({});
LowPriority.args = {
  ticket: {
    id: "1",
    title: "General Inquiry",
    priority: "low",
    messages_count: 3,
    business: { name: "Retail Inc." },
    _status: 0,
    created_at: new Date().toISOString(),
  },
};

export const MediumPriority = Template.bind({});
MediumPriority.args = {
  ticket: {
    id: "2",
    title: "Payment Issue",
    priority: "medium",
    messages_count: 7,
    business: { name: "E-Commerce Co." },
    _status: 1,
    created_at: new Date().toISOString(),
  },
};

export const HighPriority = Template.bind({});
HighPriority.args = {
  ticket: {
    id: "3",
    title: "Shipping Delay",
    priority: "high",
    messages_count: 12,
    business: { name: "Logistics Ltd." },
    _status: 2,
    created_at: new Date().toISOString(),
  },
};

export const UrgentPriority = Template.bind({});
UrgentPriority.args = {
  ticket: {
    id: "4",
    title: "System Outage",
    priority: "urgent",
    messages_count: 20,
    business: { name: "Cloud Services" },
    _status: 3,
    created_at: new Date().toISOString(),
  },
};
