import { Meta, StoryFn } from "@storybook/react";
import BlogPost from "./BlogPost";
import ContentType from "@/gcui-main/types/Content";

export default {
  title: "Cards/BlogPost",
  component: BlogPost,
  argTypes: {
    blog: {
      control: "object",
      description: "Blog post content data",
    },
    compact: {
      control: "boolean",
      description: "Determines if the view is compact",
    },
  },
} as Meta;

const blogpost: StoryFn<{ blog: ContentType; compact: boolean }> = (args) => (
  <BlogPost {...args} />
);

const sampleBlog = {
  title: "Sample Blog Title",
  slug: "sample-blog",
  short_description: "This is a sample blog post used for testing purposes.",
  avatar: "path/to/sample-image.jpg", // Placeholder path
  created_at: new Date().toISOString(),
  user: {
    name: "A person",
    avatar: null,
  },
  meta: JSON.stringify({
    menu: [{ name: "instagram", link: "https://instagram.com" }],
  }),
};

export const Default = blogpost.bind({});
Default.args = {
  blog: sampleBlog,
  compact: false,
};

export const CompactView = blogpost.bind({});
CompactView.args = {
  blog: sampleBlog,
  compact: true,
};
