"use client";
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import AnimationContainer from "./AnimationContainer";

const meta: Meta<typeof AnimationContainer> = {
  title: "Components/AnimationContainer",
  component: AnimationContainer,
  parameters: {
    layout: "centered", // Centers the component in the Storybook viewport
  },
  argTypes: {
    children: { control: "text", description: "Content inside the container" },
  },
};

export default meta;

type Story = StoryObj<typeof AnimationContainer>;

export const Default: Story = {
  args: {
    children: "  Animated Content",
  },
};

export const CustomContent: Story = {
  args: {
    children: (
      <div className="bg-green-500 text-white p-4 rounded-lg">
        This is custom animated content!
      </div>
    ),
  },
};
