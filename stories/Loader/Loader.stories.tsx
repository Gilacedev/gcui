import Loader from "./Loader";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Loader",
  component: Loader,
} as Meta;

const loader: StoryFn = () => <Loader />;

export const Default = loader.bind({});
Default.storyName = "Default Loader";
