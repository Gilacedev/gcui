import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Service from "./Service";
import content from "@/gcui-main/types/Content";

const exampleService: content = {
  title: "Premium Service",
  short_description:
    "Experience the best of our services with premium features.",
  slug: "premium-service",
  _featured: 1,
};

const meta: Meta<typeof Service> = {
  title: "Cards/Service",
  component: Service,
  args: {
    service: exampleService,
  },
};

export default meta;

export const Featured: StoryObj<typeof Service> = {};

export const NonFeatured: StoryObj<typeof Service> = {
  args: {
    service: {
      ...exampleService,
      _featured: 0,
    },
  },
};

export const NoDescription: StoryObj<typeof Service> = {
  args: {
    service: {
      ...exampleService,
      short_description: "",
    },
  },
};
