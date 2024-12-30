"use client";
import Modal from "./Modal";
import { useState } from "react";
import Button from "./Button";
import ColorTypes from "./functions/ColorTypes";
import Search from "@/components/forms/Search";

export default function SearchForm() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState<string>("");

  return (
    <div>
      <Button
        color={ColorTypes.default}
        icon={<span className={"fa fa-search"}></span>}
        onClick={() => setOpen(true)}
      ></Button>
      <Modal open={open} onClose={() => setOpen(false)} name={"search-modal"} zindex={10}>
        <div className={"p-4"}>
          <Search show_title={true} />
        </div>
      </Modal>
    </div>
  );
}
