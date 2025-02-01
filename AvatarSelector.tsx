import React, { useState } from "react";
import ReactCrop, { Crop } from "react-image-crop"; 
import "react-image-crop/dist/ReactCrop.css";
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import Language from "@/locales/Language";
import ColorTypes from "@/components/functions/ColorTypes";

type AvatarSelectorProps = {
  w?: number;
  h?: number;
  realsize?: boolean;
  onChange: (data: string) => void;
};

const AvatarSelector: React.FC<AvatarSelectorProps> = ({ w = 1080, h = 1080, realsize, onChange }) => {
  const dynamicImageName = "id" + Math.random().toString(36).slice(2, 12);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cropImageInput, setCropImageInput] = useState<string | undefined>();
  const [crop, setCrop] = useState<Crop>({
    unit: "px",
    x: 25,
    y: 25,
    width: 300,
    height: 300,
  });

  // Adjust dimensions based on aspect ratio
  const aspect = w >= h ? 300 / ((h / w) * 300) : ((w / h) * 300) / 300;

  const handleCancel = () => setIsModalOpen(false);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        setCropImageInput(reader.result as string);
        setIsModalOpen(true);
        e.target.value = ""; // Fix for iOS: Reset input field to allow re-upload of same file
      };
      reader.readAsDataURL(file);
    }
  };

  const confirmCrop = async () => {
    const image = document.querySelector<HTMLImageElement>(`#${dynamicImageName}`);
    if (image) {
      await getCroppedImage(image, crop, Math.random() + ".jpg");
    }
  };

  const setImageUrl = (data: string) => {
    onChange(data);
    setIsModalOpen(false);
  };

  const getCroppedImage = (image: HTMLImageElement, crop: Crop, fileName: string) => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    if (realsize) {
      canvas.width = w;
      canvas.height = h;
    } else {
      canvas.width = crop.width;
      canvas.height = crop.height;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      canvas.width,
      canvas.height
    );

    return new Promise<void>((resolve, reject) => {
      // Fix for iOS: Use `toDataURL` as a fallback if `toBlob` is not supported
      if (canvas.toBlob) {
        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error("The image canvas is empty"));
            return;
          }

          const file = new File([blob], fileName, { type: "image/jpeg" });

          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = () => {
            setImageUrl(reader.result as string);
            resolve();
          };
        }, "image/jpeg");
      } else {
        // iOS Fallback
        const dataUrl = canvas.toDataURL("image/jpeg");
        setImageUrl(dataUrl);
        resolve();
      }
    });
  };

  return (
    <div className="absolute w-full h-full z-[99]">
      <label
        className="flex items-center justify-center w-full h-full absolute top-0 left-0 cursor-pointer"
        htmlFor="fileSelect"
      >
        <span className="fa fa-cloud-arrow-up" />
        <input
          type="file"
          className="hidden"
          id="fileSelect"
          accept="image/*"
          onChange={onSelectFile}
        />
      </label>

      <Modal name="cropModal" zindex={30} onClose={handleCancel} open={isModalOpen}>
        <div>
          <div className="h-[50vh] flex items-center justify-center overflow-hidden">
            {cropImageInput && (
              <ReactCrop crop={crop} onChange={(c) => setCrop(c)} aspect={aspect}>
                <img
                  src={cropImageInput}
                  alt="Crop"
                  id={dynamicImageName}
                  style={{ width: "100%" }}
                />
              </ReactCrop>
            )}
          </div>
          <div className="p-4 flex gap-2 items-center justify-center">
            <Button type="button" color={ColorTypes.primary} onClick={confirmCrop} icon={<span className="fa fa-crop" />}>
              {Language().crop}
            </Button>
            <Button color={ColorTypes.default} onClick={handleCancel} icon={<span className="fa fa-times" />}>
              {Language().cancel}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AvatarSelector;
