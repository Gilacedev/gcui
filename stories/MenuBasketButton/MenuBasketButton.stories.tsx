// MenuBasketButton.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import MenuBasketButton, { MenuBasketButtonProps } from "./MenuBasketButton";

export default {
  title: "Components/MenuBasketButton",
  component: MenuBasketButton,
  argTypes: {
    totalBasket: {
      control: { type: "number" }, // Make the totalBasket value adjustable
      description: "The total number of items in the basket",
    },
  },
} as Meta<MenuBasketButtonProps>;

const menuBasketButton: StoryFn<MenuBasketButtonProps> = (args) => (
  <MenuBasketButton {...args} />
);

export const Default = menuBasketButton.bind({});
Default.args = {
  totalBasket: 5, // Default totalBasket value
};

export const EmptyBasket = menuBasketButton.bind({});
EmptyBasket.args = {
  totalBasket: 0, // No items in the basket
};

export const FilledBasket = menuBasketButton.bind({});
FilledBasket.args = {
  totalBasket: 15, // A filled basket
};
