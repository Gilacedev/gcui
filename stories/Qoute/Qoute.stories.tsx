import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Quote from "@/stories/Qoute/Quote";

// Mock data for the story
const mockData = {
  avatar: null,
  title: "hello hi im mosh",
  short_description: "A passionate developer",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. mosh i a very good person i dont know what am i typing?",
  slug: "",
};

export default {
  title: "Cards/Quote",
  component: Quote,
  argTypes: {
    data: { control: "object" },
  },
} as Meta<typeof Quote>;

const qoute: StoryFn<typeof Quote> = (args) => <Quote {...args} />;

export const Default = qoute.bind({});
Default.args = {
  data: mockData,
};
