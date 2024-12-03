import { Meta, StoryObj } from "@storybook/react";
import FinancialCard, { FinancialCardProps } from "./Financial";
import { title } from "process";

const meta: Meta<typeof FinancialCard> = {
  title: "Cards/FinancialCard",
  component: FinancialCard,
  tags: ["autodocs"],
  argTypes: {
    number: {
      control: { type: "number" },
      description: "The main numeric value to display",
    },
    title: {
      control: { type: "text" },
      description: "The title of the card",
    },
    description: {
      control: { type: "text" },
      description: "The descriptive text below the title",
    },
    icon: {
      control: { type: "text" },
      description: "FontAwesome icon name (without the fa- prefix)",
    },
  },
};

export default meta;

type financial = StoryObj<typeof FinancialCard>;

export const Default: financial = {
  args: {
    number: 42,
    title: "Revenue",
    description: "Total revenue this quarter",
    icon: "chart-line",
  },
};

export const WithoutIcon: financial = {
  args: {
    number: 157,
    title: "New Users",
    description: "Active users this month",
  },
};

export const LargeNumber: financial = {
  args: {
    number: 1234567,
    title: "Total Transactions",
    description: "Lifetime transaction count",
    icon: "exchange",
  },
};

export const CustomTheme: financial = {
  args: {
    number: 89,
    title: "رضایت مشتری",
    description: "متوسط آن یاسبنرشاسیبن است",
    icon: "smile",
  },
};
