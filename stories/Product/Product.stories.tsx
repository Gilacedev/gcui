import React from "react";
import Product from "@/gcui-main/cards/Product";
import { Meta, StoryFn } from "@storybook/react";

// Mocking the `content` type
interface Content {
  avatar?: string | null;
  title: string;
  short_description: string;
  slug: string;
  _featured?: number;
}

// Storybook configuration
export default {
  title: "Cards/Product",
  component: Product,
  argTypes: {
    product: {
      description: "The product object to render.",
      control: "object",
    },
  },
} as Meta;

// Sample data
const defaultProduct: Content = {
  avatar: "example-image.jpg",
  title: "Sample Product",
  short_description: "This is a sample product description.",
  slug: "sample-product",
  _featured: 1,
};

const nonFeaturedProduct: Content = {
  avatar: null,
  title: "Non-Featured Product",
  short_description: "This product does not have a featured status.",
  slug: "non-featured-product",
  _featured: 0,
};

const product: StoryFn<{ product: Content }> = (args) => <Product {...args} />;

export const Default = product.bind({});
Default.args = {
  product: defaultProduct,
};

export const NonFeatured = product.bind({});
NonFeatured.args = {
  product: nonFeaturedProduct,
};
