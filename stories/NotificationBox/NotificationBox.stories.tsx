import React from "react";
import NotificationBox from "./NotificationBox";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/NotificationBox",
  component: NotificationBox,
  argTypes: {
    isOpen: { control: "boolean" },
  },
} as Meta;

const notificationBox: StoryFn = (args) => <NotificationBox {...args} />;

export const NoNotifications = notificationBox.bind({});
NoNotifications.args = {
  isOpen: true,
};

// export const Notifications = notificationBox.bind({});
// Notifications.args = {
//   isOpen: true,
// };
// Notifications.parameters ={

// }
