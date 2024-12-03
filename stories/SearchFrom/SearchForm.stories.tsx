// SearchForm.stories.jsx
import React from "react";
import SearchForm from "@/stories/SearchFrom/SearchForm";

export default {
  title: "Components/SearchForm",
  component: SearchForm,
};

const Template = (args) => <SearchForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
