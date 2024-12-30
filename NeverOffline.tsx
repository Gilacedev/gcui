"use client";
import Switch from "@/components/Switch";
import { useState } from "react";
import Modal from "@/components/Modal";
import { H1 } from "@/components/Typo";
import Language from "@/locales/Language";
import Button from "@/components/Button";
import ColorTypes from "@/components/functions/ColorTypes";

const NeverOffline = () => {
	const [state, setState] = useState(true)
	const [open, setOpen] = useState(false)
	return (
		<div>
			<div className={"flex items-center gap-2"}>
				<span>
					{
						state ? "ONLINE" : "OFFLINE"
					}
				</span>
				<Switch name={"is_active"} label={"ONLINE"} onClick={() => {
					setState(false)
					setTimeout(() => {
						setOpen(true)
						setState(true)
					}, 500)

				}}
					onChange={() => {
						setState(false)
						setTimeout(() => {
							setOpen(true)
							setState(true)
						}, 500)
					}} checked={state} />
			</div>
			<Modal open={open} onClose={() => { setOpen(false) }} name={"neverOfflineModal"} zindex={50}>
				<div className={"py-12 px-8 flex flex-col items-center justify-center"}>
					<H1 element={"div"} className={"leading-8"}>
						{
							Language()["never_offline"]
						}
					</H1>
					<div className={"py-4"} />
					<div className={"flex gap-4"}>
						<Button color={ColorTypes.primary} onClick={() => { setOpen(false) }} className={"btn btn-secondary"}>
							{
								Language()["confirm"]
							}
						</Button>
					</div>
				</div>
			</Modal>
		</div>

	)
}
export default NeverOffline