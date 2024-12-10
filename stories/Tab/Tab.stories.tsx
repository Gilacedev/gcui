import type { Meta, StoryObj } from "@storybook/react";
import Tab from "./Tab";
import Badge from "../Badge/Badge";
import ColorTypes from "@/gcui-main/functions/ColorTypes";

const meta: Meta<typeof Tab> = {
  title: "Components/Tab",
  component: Tab,
  argTypes: {
    headers: {
      description: "Array of React nodes to be used as tab headers",
      control: "object",
    },
    contents: {
      description: "Array of React nodes to be used as tab contents",
      control: "object",
    },
  },
};

export default meta;
type tab = StoryObj<typeof Tab>;

export const Basic: tab = {
  args: {
    headers: ["Tab 1", "Tab 2", "Tab 3"],
    contents: ["Content for Tab 1", "Content for Tab 2", "Content for Tab 3"],
  },
};

export const RichContent: tab = {
  args: {
    headers: [
      <Badge color={ColorTypes.primary} particular={false}>
        Profile
      </Badge>,

      <Badge color={ColorTypes.danger} particular={false}>
        Settings
      </Badge>,

      <Badge color={ColorTypes.success} particular={false}>
        Notifications
      </Badge>,
    ],
    contents: [
      <div key="1" className="space-y-4">
        <h3 className="text-xl font-bold">Profile Settings</h3>
        <p>Manage your profile information and preferences here.</p>
      </div>,
      <div key="2" className="space-y-4">
        <h3 className="text-xl font-bold">Account Settings</h3>
        <p>Configure your account settings and security options.</p>
      </div>,
      <div key="3" className="space-y-4">
        <h3 className="text-xl font-bold">Notification Preferences</h3>
        <p>Control how and when you receive notifications.</p>
      </div>,
    ],
  },
};

export const LongContent: tab = {
  args: {
    headers: ["Short", "Medium", "Long"],
    contents: [
      "A brief content section.",
      <div key="2" className="space-y-4">
        <p>A medium-length content section with multiple paragraphs.</p>
        <p>It demonstrates how the tab handles moderate amounts of content.</p>
      </div>,
      <div key="3" className="space-y-4">
        <p>A longer content section with multiple paragraphs and elements.</p>
        <p>This demonstrates how the tab handles larger amounts of content.</p>
        <ul className="list-disc pl-4">
          <li>Point 1</li>
          <li>Point 2</li>
          <li>Point 3</li>
        </ul>
        <p>Additional content to show scrolling behavior.</p>
      </div>,
    ],
  },
};
