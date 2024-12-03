import React from "react";
import MediaPreview from "./MediaPreview";

export default {
  title: "Components/MediaPreview",
  component: MediaPreview,
};

const mediapreview = (args) => <MediaPreview {...args} />;

export const Default = mediapreview.bind({});
Default.args = {
  content: {
    avatar: "assets/images/sample-avatar.jpg",
    title: "Sample Title",
    files: [
      {
        slug: "assets/images/gpro.jpg",
        name: "Sample Image",
      },
      {
        slug: "assets/images/gshop1.jpg",
        name: "Sample Image",
      },
      {
        slug: "assets/images/gshop2.jpg",
        name: "Sample Image",
      },
    ],
  },
};
