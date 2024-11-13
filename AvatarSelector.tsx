"use client"
import React, {useState} from 'react';
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import Language from "@/locales/Language";
import ColorTypes from "@/components/functions/ColorTypes";

const AvatarSelector = (props) => {
	//modal handlers :
	const dynamicImageName = "id" + (Math.random().toString(36).slice(2, 12));
	const [isModalOpen, setIsModalOpen] = useState(false);
	let localW = props.w ? props.w : 1080;
	let localH = props.h ? props.h : 1080;
	if (localW >= localH) {
		localH = localH / localW * 300
		localW = 300
	}
	else {
		localW = localW / localH * 300
		localH = 300
	}
	let aspect = localW / localH;

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const onchange = (e) => {
		props.onChange(e)
	}



	//crop handlers:
	const [cropImageInput, setCropImageInput] = useState();
	const [crop, setCrop] = useState({ aspect: aspect, unit: 'px', x: 25, y: 25, width: localW, height: localH });
	const onSelectFile = (e) => {
		if (e.target.files && e.target.files.length > 0) {
			const reader = new FileReader();
			reader.addEventListener("load", () => {
				setCropImageInput(reader.result)
				setIsModalOpen(true)
			});
			reader.readAsDataURL(e.target.files[0]);
		}
	}
	async function confirmCrop(e) {

		let image = document.querySelector("#" + dynamicImageName)
		getCroppedImage(image, crop, Math.random() + ".jpg")

	}
	const setImageUrl = (e) => {
		onchange(e)
		setIsModalOpen(false)
	}
	const cancelCrop = (e) => {
		setIsModalOpen(false)
	}
	function getCroppedImage(image, crop, fileName) {
		const imageCanvas = document.createElement("canvas");
		const scaleX = image.naturalWidth / image.width;
		const scaleY = image.naturalHeight / image.height;
		if (props.realsize) {
			imageCanvas.width = props.w;
			imageCanvas.height = props.h;
			const imgCx = imageCanvas.getContext("2d");
			imgCx.drawImage(
				image,
				crop.x * scaleX,
				crop.y * scaleY,
				crop.width * scaleX,
				crop.height * scaleY,
				0,
				0,
				props.w,
				props.h
			);
		}
		else {
			imageCanvas.width = crop.width;
			imageCanvas.height = crop.height;
			const imgCx = imageCanvas.getContext("2d");
			imgCx.drawImage(
				image,
				crop.x * scaleX,
				crop.y * scaleY,
				crop.width * scaleX,
				crop.height * scaleY,
				0,
				0,
				crop.width,
				crop.height
			);
		}

		return new Promise((reject, resolve) => {
			imageCanvas.toBlob((blob) => {
				if (!blob) {
					reject(new Error("the image canvas is empty"));
					return;
				}
				blob.name = fileName;
				let imageURL;
				window.URL.revokeObjectURL(imageURL);
				var reader = new FileReader();
				let imageData = reader.readAsDataURL(blob);
				reader.onloadend = function () {
					setImageUrl(reader.result);
					//resolve(true);
				}
			}, "image/jpeg");
		});
	}
	return (
		<div className='absolute w-full h-full z-[1]'>
			<label className={"flex items-center justify-center w-full h-full absolute top-0 left-0"} htmlFor="fileSelect" onClick={(e) => {
				onSelectFile(e)
			}}>
				<span className={"fa fa-cloud-arrow-up"}/>
				<input style={{width: "100%", height: "40px"}} type="file" className='hidden' id="fileSelect"
					   accept="image/*" onChange={onSelectFile}></input>
			</label>

			<Modal name={"cropModal"} zindex={30} onClose={handleCancel} open={isModalOpen} >
				<div>
					<div className={"h-[calc(100vh-200px)] overflow-hidden"}>
						<ReactCrop
							src={cropImageInput}
							onImageLoaded={(e) => {

							}}
							crop={crop}
							onChange={(c) => setCrop(c)}
							onComplete={(e) => {
							}}
							aspect={aspect}
						>
							<img src={cropImageInput} id={dynamicImageName}/>
						</ReactCrop>
					</div>
					<div className={"p-4 flex gap-2 items-center"}>
						<Button type='button' color={ColorTypes.primary} onClick={confirmCrop}
								icon={<span className={"fa fa-crop"}/>}>
							{Language().crop}
						</Button>
						<Button color={ColorTypes.default} onClick={cancelCrop}
								icon={<span className={"fa fa-times"}/>}>
							{Language().cancel}
						</Button>
					</div>
				</div>
			</Modal>
		</div>
	);
}

export default AvatarSelector;
