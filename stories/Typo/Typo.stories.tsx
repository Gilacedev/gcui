import type { Meta, StoryObj } from "@storybook/react";
import { H1, H2, H3, Paragraph } from "./Typo";

const meta = {
  title: "Components/Typography",
  component: H1,
  argTypes: {
    element: {
      control: "text",
      description: 'HTML element to render (e.g., "div", "span")',
    },
    className: {
      control: "text",
      description: "Custom CSS classes to override default styles",
    },
    children: {
      control: "text",
      description: "Content to be rendered",
    },
  },
} as Meta<typeof H1>;

export default meta;
type typo = StoryObj<typeof meta>;

export const Heading1: typo = {
  render: (args) => <H1 {...args} />,
  args: {
    children: "Main Heading (H1)",
  },
};

export const Heading2: typo = {
  render: (args) => <H2 {...args} />,
  args: {
    children: "Secondary Heading (H2)",
  },
};

export const Heading3: typo = {
  render: (args) => <H3 {...args} />,
  args: {
    children: "Tertiary Heading (H3)",
  },
};

export const ParagraphDefault: typo = {
  render: (args) => <Paragraph {...args} />,
  args: {
    children: "Default paragraph with standard text styling.",
  },
};

export const TypographyHierarchy: typo = {
  render: () => (
    <div className="space-y-4">
      <H1>Main Title</H1>
      <H2>Section Header</H2>
      <H3>Subsection Header</H3>
      <Paragraph>
        This is a paragraph of text that demonstrates how all typography
        elements work together in a hierarchical structure. The spacing and
        sizing help create a clear visual hierarchy that guides the reader
        through the content.
      </Paragraph>
      <Paragraph>
        A second paragraph to show text flow and spacing between paragraphs.
        Notice how the line height and margins create comfortable reading
        rhythm.
      </Paragraph>
    </div>
  ),
};
