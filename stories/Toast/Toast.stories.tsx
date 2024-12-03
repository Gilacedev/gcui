import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Toast from "./Toast";
import { ToastStores } from "../../gcui-main/stores/ToastStore";
import ColorTypes from "@/gcui-main/functions/ColorTypes";

const meta: Meta = {
  title: "Components/Toast",
  component: Toast,
};

export default meta;

const toast: StoryFn = (args) => {
  ToastStores.setToast({
    message: "This is a toast message!",
    title: "Toast Title",
    type: ColorTypes.success,
    icon: "check-circle",
  });

  return <Toast {...args} />;
};

export const ErrorToast = toast.bind({});
ErrorToast.args = {};
ErrorToast.decorators = [
  () => {
    ToastStores.setToast({
      message: "An error occurred!",
      title: "Error",
      type: ColorTypes.danger,
      icon: "exclamation-circle",
    });
    return <Toast />;
  },
];

export const InfoToast = toast.bind({});
InfoToast.args = {};
InfoToast.decorators = [
  () => {
    ToastStores.setToast({
      message: "Here is some information.",
      title: "Info",
      type: ColorTypes.success,
      icon: "info-circle",
    });
    return <Toast />;
  },
];
