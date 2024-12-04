import React from "react";
import Plans from "./Plans";

// Static data for the story
const staticPlans = [
  {
    title: "Basic Plan",
    description: "This is the basic plan description.",
    duration: "monthly",
    price: 10,
    meta: JSON.stringify({
      menu: [
        { feature: "Feature 1" },
        { feature: "Feature 2" },
        { feature: "Feature 3" },
      ],
    }),
    _freemium: 0,
    _featured: false,
  },
  {
    title: "Premium Plan",
    description: "This is the premium plan description.",
    duration: "yearly",
    price: 100,
    meta: JSON.stringify({
      menu: [
        { feature: "Premium Feature 1" },
        { feature: "Premium Feature 2" },
      ],
    }),
    _freemium: 0,
    _featured: true,
  },
];

export default {
  title: "Components/Plans",
  component: Plans,
};

const Template = (args) => <Plans {...args} />;

// Default Story
export const Default = Template.bind({});
Default.args = {
  plans: staticPlans,
};
