import React from "react";
import ActionBarBasket from "./ActionBarBasket";
import { BasketStores } from "@/gcui-main/stores/BasketStore";

// Simulate the `BasketStores` state for Storybook
BasketStores.setBasket = (state) => console.log("Basket toggled:", state);

export default {
  title: "Components/ActionBarBasket",
  component: ActionBarBasket,
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <ActionBarBasket {...args} />;

export const EmptyBasket = Template.bind({});
EmptyBasket.args = {
  // Simulate an empty basket
};
