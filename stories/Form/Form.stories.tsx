import { Meta, StoryFn } from "@storybook/react";
import Form, { FormProps } from "./Form";
import Input from "../Input/Input";
import Button from "../Button/Button";
import ColorTypes from "@/gcui-main/functions/ColorTypes";

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

const formWithContent: StoryFn<FormProps> = (args) => (
  <div className="">
    <Form {...args}>
      <div dir="rtl" className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <Input id="name" placeholder="Enter your first name" />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <Input id="lastname" placeholder="Enter your last name" />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <div>
          <Button color={ColorTypes.primary}>Submit</Button>
        </div>
      </div>
    </Form>
  </div>
);

export const withcontent = formWithContent.bind({});
withcontent.args = {
  title: "Edit Form",
  type: "edit",
  loading: false,
};

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
