import { Meta, StoryObj } from "@storybook/react";
import User from "./User";

const myUser = {
  avatar: "/assets/images/gcast.jpg",
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
type user = StoryObj<typeof User>;

export const Default: user = {
  args: {
    loading: false,
    user: myUser,
  },
};

export const Loading: user = {
  args: {
    loading: true,
    user: null,
  },
};

export const NoName: user = {
  args: {
    loading: false,
    user: {
      avatar: "/assets/images/example-avatar.png",
      name: undefined,
      username: "nonameuser",
    },
  },
};
