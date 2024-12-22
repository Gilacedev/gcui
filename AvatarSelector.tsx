import React, { useState } from "react";
import ReactCrop, { Crop, PixelCrop } from "react-image-crop"; 
import "react-image-crop/dist/ReactCrop.css";
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import Language from "@/locales/Language";
import ColorTypes from "@/components/functions/ColorTypes";

// Define the type for props
type AvatarSelectorProps = {
  w?: number;
  h?: number;
  realsize?: boolean;
  onChange: (data: string) => void;
};

const AvatarSelector: React.FC<AvatarSelectorProps> = (props) => {
  const dynamicImageName = "id" + Math.random().toString(36).slice(2, 12);
  const [isModalOpen, setIsModalOpen] = useState(false);

  let localW = props.w ? props.w : 1080;
  let localH = props.h ? props.h : 1080;
  if (localW >= localH) {
    localH = (localH / localW) * 300;
    localW = 300;
  } else {
    localW = (localW / localH) * 300;
    localH = 300;
  }
  let aspect = localW / localH;

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onchange = (e: string) => {
    props.onChange(e);
  };

  // Crop handlers
  const [cropImageInput, setCropImageInput] = useState<string | undefined>();
  const [crop, setCrop] = useState<Crop>({
    unit: "px",
    x: 25,
    y: 25,
    width: localW,
    height: localH,
  });

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setCropImageInput(reader.result as string);
        setIsModalOpen(true);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  async function confirmCrop() {
    const image = document.querySelector<HTMLImageElement>("#" + dynamicImageName);
    if (image) {
      await getCroppedImage(image, crop, Math.random() + ".jpg");
    }
  }

  const setImageUrl = (e: string) => {
    onchange(e);
    setIsModalOpen(false);
  };

  const cancelCrop = () => {
    setIsModalOpen(false);
  };

  function getCroppedImage(image: HTMLImageElement, crop: any, fileName: string) {
    const imageCanvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    if (props.realsize) {
      imageCanvas.width = props.w || 1080;
      imageCanvas.height = props.h || 1080;
      const imgCx = imageCanvas.getContext("2d");
      if (imgCx) {
        imgCx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          props.w || 1080,
          props.h || 1080
        );
      }
    } else {
      imageCanvas.width = crop.width;
      imageCanvas.height = crop.height;
      const imgCx = imageCanvas.getContext("2d");
      if (imgCx) {
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
    }

    return new Promise<void>((resolve, reject) => {
      imageCanvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error("The image canvas is empty"));
          return;
        }

        // Create a File object from the Blob
        const file = new File([blob], fileName, { type: "image/jpeg" });

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
          setImageUrl(reader.result as string);
          resolve();
        };
      }, "image/jpeg");
    });
  }

  return (
    <div className="absolute w-full h-full z-[1]">
      <label
        className="flex items-center justify-center w-full h-full absolute top-0 left-0"
        htmlFor="fileSelect"
        onClick={(e) => {
          onSelectFile(e as unknown as React.ChangeEvent<HTMLInputElement>);
        }}
      >
        <span className="fa fa-cloud-arrow-up" />
        <input
          style={{ width: "100%", height: "40px" }}
          type="file"
          className="hidden"
          id="fileSelect"
          accept="image/*"
          onChange={onSelectFile}
        ></input>
      </label>

      <Modal name="cropModal" zindex={30} onClose={handleCancel} open={isModalOpen}>
        <div>
          <div className="h-[calc(100vh-200px)] overflow-hidden">
            {/* Render the image directly as a child */}
            {cropImageInput && (
              <ReactCrop
                crop={crop}
                onChange={(c) => setCrop(c)}
                aspect={aspect}
              >
                <img
                  src={cropImageInput}
                  alt="Crop me"
                  id={dynamicImageName}
                  style={{ width: "100%" }}
                />
              </ReactCrop>
            )}
          </div>
          <div className="p-4 flex gap-2 items-center">
            <Button
              type="button"
              color={ColorTypes.primary}
              onClick={confirmCrop}
              icon={<span className="fa fa-crop" />}
            >
              {Language().crop}
            </Button>
            <Button
              color={ColorTypes.default}
              onClick={cancelCrop}
              icon={<span className="fa fa-times" />}
            >
              {Language().cancel}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AvatarSelector;
