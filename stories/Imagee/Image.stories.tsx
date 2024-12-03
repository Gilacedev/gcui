import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Image, { ImageProps } from "./Image";

export default {
  title: "Components/Image",
  component: Image,
  argTypes: {
    src: {
      control: "text",
      description: "The source URL of the image",
      defaultValue: "https://via.placeholder.com/300",
    },
    alt: {
      control: "text",
      description: "Alt text for the image",
      defaultValue: "Placeholder Image",
    },
    type: {
      control: {
        type: "radio",
        options: ["cover", "contain"],
      },
      description: "Defines the object-fit property for the image",
      defaultValue: "cover",
    },
  },
} as Meta;

const Template: StoryFn<ImageProps> = (args) => (
  <div className="w-60 h-60">
    <Image {...args} />
  </div>
);
export const Cover = Template.bind({});
Cover.args = {
  src: "/assets/images/gpro.jpg",
  alt: "Cover image",
  type: "cover",
};

export const Contain = Template.bind({});
Contain.args = {
  src: "/assets/images/gpro.jpg",
  alt: "Contain image",
  type: "contain",
};
