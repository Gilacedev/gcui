import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Slogan, { SloganProps } from "./Slogan";

const meta: Meta<typeof Slogan> = {
  title: "Cards/Slogan",
  component: Slogan,
  argTypes: {
    media: {
      control: "text",
      description: "URL of the media image",
    },
    title: {
      control: "text",
      description: "Title displayed in the Slogan block",
    },
    description: {
      control: "text",
      description: "Description text displayed below the title",
    },
    particular: {
      control: "boolean",
      description: "Toggle additional visual indicators",
    },
  },
};

export default meta;

const slogan: StoryFn<SloganProps> = (args) => <Slogan {...args} />;

export const Default = slogan.bind({});
Default.args = {
  media: "/assets/images/gshop1.jpg",
  title: "Default Slogan Title",
  description: "This is the default description for the slogan.",
  particular: false,
};

export const WithParticular = slogan.bind({});
WithParticular.args = {
  media: "/assets/images/gshop2.jpg",
  title: "Slogan with Particular",
  description: "This slogan showcases the `particular` style.",
  particular: true,
};

export const CustomMedia = slogan.bind({});
CustomMedia.args = {
  media: "assets/images/gilace-logo.svg",
  title: "Custom Media Example",
  description: "This example demonstrates a custom media source.",
  particular: false,
};
