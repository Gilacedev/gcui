import { Meta, StoryObj } from "@storybook/react";
import User from "@/stories/User/User";

const myUser = {
  avatar: "/assets/images/example-avatar.png",
  name: "همایون",
  username: "homayoon123",
};

const meta: Meta<typeof User> = {
  title: "Cards/User",
  component: User,
  args: {
    loading: false,
    user: myUser,
  },
};

export default meta;
type Story = StoryObj<typeof User>;

export const Default: Story = {
  args: {
    loading: false,
    user: myUser,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    user: myUser,
  },
};

export const NoName: Story = {
  args: {
    loading: false,
    user: {
      avatar: "/assets/images/example-avatar.png",
      name: undefined,
      username: "nonameuser",
    },
  },
};
