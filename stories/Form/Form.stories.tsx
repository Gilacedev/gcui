import { Meta, StoryFn } from "@storybook/react";
import Form, { FormProps } from "./Form";

export default {
  title: "Components/Form",
  component: Form,
  argTypes: {
    onSubmit: { action: "submitted" },
    type: {
      options: ["create", "edit"],
      control: { type: "radio" },
    },
    loading: { control: "boolean" },
  },
} as Meta;

const form: StoryFn<FormProps> = (args) => <Form {...args}></Form>;

export const Create = form.bind({});
Create.args = {
  title: "Create Form",
  type: "create",
  loading: false,
};

export const Edit = form.bind({});
Edit.args = {
  title: "Edit Form",
  type: "edit",
  loading: false,
};
