import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  args: {
    open: true,
    name: "example-modal",
    zindex: 30,
  },
  argTypes: {
    open: { control: "boolean" },
    name: { control: "text" },
    zindex: { control: "number" },
    onClose: { action: "closed" },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.open);

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Open Modal
        </button>
        <Modal
          {...args}
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
            args.onClose();
          }}
        >
          <div className="p-6 text-white">
            <h2 className="text-xl font-bold">Modal Content</h2>
            <p>This is an example of the modal content.</p>
          </div>
        </Modal>
      </div>
    );
  },
};
