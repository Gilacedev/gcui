import React from "react";
import Business from "@/stories/Business/Business";
import Blocks from "@/stories/Blocks/Blocks";

// Mock data
const sampleBusiness = {
  id: 1,
  name: "Tech Innovators Ltd.",
  website: "https://techinnovators.com",
  avatar: "/assets/images/company-logo.png",
  _status: 1,
};

const business = (args) => (
  <div className="grid">
    <Business {...args} />
  </div>
);
export default {
  title: "Cards/Business",
  component: Business,
  parameters: {
    layout: "padded",
  },
  args: {
    business: sampleBusiness,
    editable: false,
  },
  argTypes: {
    business: {
      control: "object",
      description: "Business object containing details to display.",
    },
    editable: {
      control: "boolean",
      description: "Enables editing options for the business.",
    },
  },
};

// Stories

export const Inactive = business.bind({});
Inactive.args = {
  business: {
    ...sampleBusiness,
    _status: 0, // Inactive
  },
  editable: false,
};

export const Active = business.bind({});
Active.args = {
  business: {
    ...sampleBusiness,
    _status: 1, // Active
  },
  editable: true,
};

export const Processing = business.bind({});
Processing.args = {
  business: {
    ...sampleBusiness,
    _status: 2, // Processing
  },
  editable: false,
};

export const UnderReview = business.bind({});
UnderReview.args = {
  business: {
    ...sampleBusiness,
    _status: 3, // Under Review
  },
  editable: true,
};
