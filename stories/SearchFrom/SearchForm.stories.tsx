// SearchForm.stories.jsx
import React from "react";
import SearchForm from "@/stories/SearchFrom/SearchForm";

export default {
  title: "Components/SearchForm",
  component: SearchForm,
};

const searchForm = (args) => <SearchForm {...args} />;

export const Default = searchForm.bind({});
Default.args = {};
