import type { Meta, StoryObj } from "@storybook/react";
import Block from "./Blocks";

const meta = {
  title: "Components/Block",
  component: Block.Dark,
  tags: ["autodocs"],
  argTypes: {
    particular: {
      control: "boolean",
      description: "Adds special styling and decorative elements",
    },
    children: {
      control: "text",
      description: "Content to be rendered inside the block",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
    },
  },
} as Meta<typeof Block.Dark>;

export default meta;
type Story = StoryObj<typeof meta>;

// Dark Block Stories
export const DarkBlock: Story = {
  args: {
    children: "Dark Block Content",
    particular: false,
    className: "",
  },
};

export const DarkBlockParticular: Story = {
  args: {
    children: "Dark Block with Particular Styling",
    particular: true,
    className: "",
  },
};

// Gradient Block Stories
export const GradientBlock: Story = {
  render: (args) => <Block.Gradient {...args} />,
  args: {
    children: "Gradient Block Content",
    particular: false,
    className: "",
  },
};

export const GradientBlockParticular: Story = {
  render: (args) => <Block.Gradient {...args} />,
  args: {
    children: "Gradient Block with Particular Styling",
    particular: true,
    className: "",
  },
};

// Bordered Block Stories
export const BorderedBlock: Story = {
  render: (args) => <Block.Bordered {...args} />,
  args: {
    children: "Bordered Block Content",
    particular: false,
    className: "",
  },
};

export const BorderedBlockParticular: Story = {
  render: (args) => <Block.Bordered {...args} />,
  args: {
    children: "Bordered Block with Particular Styling",
    particular: true,
    className: "",
  },
};

// Examples with different content and styling
export const WithLongContent: Story = {
  render: (args) => (
    <Block.Dark {...args} className="max-w-md">
      <h2 className="text-xl font-bold mb-2">Title Example</h2>
      <p>
        This is a longer content example to demonstrate how the block handles
        multiple lines of text and different types of content. You can add
        various elements inside the block.
      </p>
    </Block.Dark>
  ),
};

export const CustomStyling: Story = {
  render: (args) => (
    <Block.Dark {...args} className="bg-opacity-75 p-6">
      Custom styled content with different padding and opacity
    </Block.Dark>
  ),
};

export const WithNestedBlocks: Story = {
  render: (args) => (
    <Block.Gradient className="p-6">
      <Block.Bordered className="mb-4">
        <h3 className="font-bold">Nested Block Example</h3>
      </Block.Bordered>
      <Block.Dark>Inner content</Block.Dark>
    </Block.Gradient>
  ),
};
