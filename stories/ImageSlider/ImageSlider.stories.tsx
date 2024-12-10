// ImageSlider.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ImageSlider, { ImageSliderProps } from "./ImageSlider";

export default {
  title: "Components/ImageSlider",
  component: ImageSlider,
  args: {
    media: [],
    alt: "Demo media",
  },
} as Meta<ImageSliderProps>;

const imageSlider: StoryFn<ImageSliderProps> = (args) => (
  <ImageSlider {...args} />
);

export const Default = imageSlider.bind({});
Default.args = {
  media: [
    "/assets/images/gpro.jpg",
    "/assets/images/gshop1.jpg",
    "/assets/images/gshop2.jpg",
    "/assets/images/gcast.jpg",
  ],
  alt: "Sample media",
};
