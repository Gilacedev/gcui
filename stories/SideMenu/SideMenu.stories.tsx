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

const sidemenu = (args) => {
  AuthStores.getSnapshot = () => args.isAuthenticated;
  MenuStores.getSnapshot = () => args.open;

  return <SideMenu />;
};

export const MenuOpen = sidemenu.bind({});
MenuOpen.args = {
  isAuthenticated: false,
  open: true,
};

export const AuthenticatedUser = sidemenu.bind({});
AuthenticatedUser.args = {
  isAuthenticated: true,
  open: true,
};
