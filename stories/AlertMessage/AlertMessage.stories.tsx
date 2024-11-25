import { Meta, StoryObj } from "@storybook/react";
import AlertMessage from "./AlertMessage";

const meta: Meta<typeof AlertMessage> = {
  title: "Components/AlertMessage",
  component: AlertMessage,
  args: {
    title: "System Update",
    short_description: "We are performing scheduled maintenance.",
    meta: JSON.stringify({
      menu: [
        {
          url: "https://example.com/updates",
          icon: "exclamation-circle",
          btn_title: "View Updates",
        },
      ],
    }),
  },
};

export default meta;
type alert = StoryObj<typeof AlertMessage>;

export const Default: alert = {};
