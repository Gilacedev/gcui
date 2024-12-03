import React from "react";
import SideMenu from "./SideMenu";
import { MenuStores } from "@/gcui-main/stores/menuStore";
import { AuthStores } from "@/gcui-main/stores/AuthStore";

export default {
  title: "Components/SideMenu",
  component: SideMenu,
  argTypes: {
    isAuthenticated: { control: "boolean" },
  },
};

const Template = (args) => {
  AuthStores.getSnapshot = () => args.isAuthenticated;
  MenuStores.getSnapshot = () => args.open;

  return <SideMenu />;
};

export const MenuOpen = Template.bind({});
MenuOpen.args = {
  isAuthenticated: false,
  open: true,
};

// export const MenuClosed = Template.bind({});
// MenuClosed.args = {
//   isAuthenticated: false,
//   open: false,
// };

export const AuthenticatedUser = Template.bind({});
AuthenticatedUser.args = {
  isAuthenticated: true,
  open: true,
};
