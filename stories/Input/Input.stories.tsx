import { Meta, StoryFn } from "@storybook/react";
import Input, { inputProps } from "./Input";

export default {
  title: "Components/Input",
  component: Input,

  argTypes: {
    icon: { control: "text" },
    ltr: { control: "boolean" },
    className: { control: "text" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    placeholder: { control: "text" },
  },
} as Meta<typeof Input>;

const input: StoryFn<inputProps> = (args) => <Input {...args} />;

export const Default = input.bind({});
Default.args = {
  placeholder: "Enter text...",
  className: "",
  ltr: false,
  disabled: false,
  loading: false,
};

export const Disabled = input.bind({});
Disabled.args = {
  placeholder: "Disabled input",
  disabled: true,
};

export const WithIcon = input.bind({});
WithIcon.args = {
  placeholder: "Search...",
  icon: <span className="text-slate-400">@</span>,
  ltr: false,
  loading: false,
  disabled: false,
};
