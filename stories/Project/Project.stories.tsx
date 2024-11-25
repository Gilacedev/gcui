import React from "react";
import Project from "@/gcui-main/cards/Project";
import { Meta, StoryFn } from "@storybook/react";

interface Content {
  avatar?: string | null;
  title: string;
  short_description: string;
  slug: string;
}

export default {
  title: "Cards/Project",
  component: Project,
  argTypes: {
    data: {
      description: "The project data to render.",
      control: "object",
    },
  },
} as Meta;

// Sample data
const defaultProject: Content = {
  avatar: "example-avatar.jpg",
  title: "Sample Project",
  short_description: "This is a sample project description.",
  slug: "sample-project",
};

const placeholderProject: Content = {
  avatar: null,
  title: "Placeholder Project",
  short_description: "This project uses a placeholder image.",
  slug: "placeholder-project",
};

// Story template
const project: StoryFn<{ data: Content }> = (args) => <Project {...args} />;

export const Default = project.bind({});
Default.args = {
  data: defaultProject,
};

export const WithPlaceholderAvatar = project.bind({});
WithPlaceholderAvatar.args = {
  data: placeholderProject,
};
