import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Pagination, { PaginationProps } from "./Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    currentPage: {
      control: { type: "number" },
      defaultValue: 1,
      description: "The current active page.",
    },
    totalPages: {
      control: { type: "number" },
      defaultValue: 10,
      description: "The total number of pages.",
    },
    onPageChange: {
      action: "pageChanged",
      description: "Callback for page changes.",
    },
  },
} as Meta;

const pagination: StoryFn<PaginationProps> = (args: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    args.onPageChange(page);
  };

  return (
    <div dir="ltr">
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export const Default = pagination.bind({});
Default.args = {
  totalPages: 10,
};
