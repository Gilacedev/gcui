import React from "react";
import SideMenu from "../../gcui-main/SideMenu";
import { MenuStores } from "@/gcui-main/stores/menuStore";

export default {
  title: "Components/SideMenu",
  component: SideMenu,
};

const sidemenu = () => {
  MenuStores.setMenu(true);
  return <SideMenu />;
};

export const Default = sidemenu.bind({});
Default.args = {};
