import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Login from "./Login";

export default {
  title: "Forms/Login",
  component: Login,
  argTypes: {
    beforShopping: {
      control: { type: "boolean" },
      description: "Indicates if the login is before shopping.",
    },
  },
} as Meta<typeof Login>;

const login: StoryFn<typeof Login> = (args) => (
  <div className="relative">
    <Login {...args} />
  </div>
);
export const Default = login.bind({});
Default.args = {
  beforShopping: false,
};

export const BeforeShopping = login.bind({});
BeforeShopping.args = {
  beforShopping: true,
};
