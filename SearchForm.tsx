"use client";
import Modal from "@/components/Modal";
import {useState} from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import ColorTypes from "@/components/functions/ColorTypes";

export default function SearchForm() {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<Button color={ColorTypes.default} icon={<span className={"fa fa-search"}></span>} onClick={()=>{setOpen(true)}}></Button>
			<Modal open={open} onClose={()=>setOpen(false)} name={"search-modal"} zindex={10}>
				<form className={"p-4 rounded-2xl shadow-2xl"}>
					<div className={"mb-2"}>
						جستجو در سایت
					</div>
					<Input placeholder={"جستجو"} icon={<span className={"fa fa-search"}></span>} />
				</form>
			</Modal>
		</div>
	)
}