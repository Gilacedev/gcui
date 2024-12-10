"use client";
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import AnimationContainer from "./AnimationContainer";

const meta: Meta<typeof AnimationContainer> = {
  title: "Components/AnimationContainer",
  component: AnimationContainer,
  argTypes: {
    children: { control: "text", description: "Content inside the container" },
  },
};

export default meta;

type animationContainer = StoryObj<typeof AnimationContainer>;

export const Default: animationContainer = {
  args: {
    children: "  Animated Content",
  },
};

export const CustomContent: animationContainer = {
  args: {
    children: (
      <div className="bg-green-500 text-white p-4 rounded-lg">
        This is custom animated content!
      </div>
    ),
  },
};
