import React from "react";
import Footer from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
};

const footer = (args) => (
  <div className="grid grid-cols-1" dir="rtl">
    <Footer {...args} />
  </div>
);

export const Default = footer.bind({});
Default.args = {
  settings: [
    { name: "footer_site_name", value: "گیلاس" },
    { name: "footer_site_slogan", value: "طعم واقعی اینترنت" },
    { name: "footer_description", value: "لذت ببرید از خدمات ما!" },
    { name: "instagram", value: "https://instagram.com" },
    { name: "telegram", value: "https://telegram.me" },
    { name: "whatsapp", value: "https://whatsapp.com" },
    { name: "youtube", value: "https://youtube.com" },
  ],
  menu: {
    title: "دسترسی سریع",
    meta: JSON.stringify({
      menu: [
        { id: 1, title: "خانه", url: "/", icon: "home" },
        { id: 2, title: "تماس با ما", url: "/contact", icon: "phone" },
        { id: 3, title: "درباره ما", url: "/about", icon: "info-circle" },
      ],
    }),
  },
  namads: [],
};
