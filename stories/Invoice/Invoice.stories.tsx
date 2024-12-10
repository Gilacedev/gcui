// Invoice.stories.js
import React from "react";
import Invoice from "./Invoice";
import Language from "@/gcui-main/locales/Language";

// Mock invoice data
const createMockInvoice = (status) => {
  const now = new Date();
  const baseInvoice = {
    invoice_number: "INV123456",
    created_at: now.toISOString(),
    total: 1500,
    items: [
      { payable: { short_description: "Sample Item 1", price: 500 } },
      { payable: { short_description: "Sample Item 2", price: 1000 } },
    ],
  };

  switch (status) {
    case "pending":
      return {
        ...baseInvoice,
        expired_at: new Date(
          now.getTime() + 60 * 60 * 24 * 31 * 1000
        ).toISOString(),
      }; // 31 days from now
    case "warning":
      return {
        ...baseInvoice,
        expired_at: new Date(
          new Date().getTime() + 5 * 24 * 60 * 60 * 1000
        ).toISOString(),
      }; //  now
    case "danger":
      return {
        ...baseInvoice,
        expired_at: new Date(
          now.getTime() + 60 * 60 * 24 * 1 * 1000
        ).toISOString(),
      }; // 1 day from now
    case "expired":
      return {
        ...baseInvoice,
        expired_at: new Date(
          now.getTime() - 60 * 60 * 24 * 1 * 1000
        ).toISOString(),
      }; // 1 day in the past
    default:
      return baseInvoice;
  }
};

export default {
  title: "Cards/Invoice",
  component: Invoice,
};

const invoice = (args) => <Invoice {...args} />;

export const Pending = invoice.bind({});
Pending.args = { invoice: createMockInvoice("pending") };

export const Warning = invoice.bind({});
Warning.args = { invoice: createMockInvoice("warning") };

export const Danger = invoice.bind({});
Danger.args = { invoice: createMockInvoice("danger") };

export const Expired = invoice.bind({});
Expired.args = { invoice: createMockInvoice("expired") };
