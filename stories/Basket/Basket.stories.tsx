import React from "react";
import Basket from "./Basket";

export default {
  title: "Components/Basket",
  component: Basket,
};

const basket = (args) => <Basket {...args} />;

// Empty Basket story
export const EmptyBasket = basket.bind({});
EmptyBasket.args = {};
