import React from 'react'
import AvatarSelector from "@/components/AvatarSelector";
import Language from "@/locales/Language";
type AvatarBoxProps = {
    name: string,
    formAvatar: string,
    type: "horizontal" | "vertical" | "square" | "custom",
    w?: number,
    h?: number,
    realsize: boolean,
    onChange?: any,
    label: string
}
export default function AvatarBox(props:AvatarBoxProps) {
    const [croppedImage, setCroppedImage] = React.useState("");
    const [croppedImagePreview, setCroppedImagePreview] = React.useState( (props.formAvatar) ? props.formAvatar : "/assets/images/image-placeholder.svg");
    let avatar = (props.formAvatar) ? props.formAvatar : "/assets/images/image-placeholder.svg";
    const sizes = {
        horizontal : {
            w : 1920,
            h: 1200
        },
        vertical : {
            w : 1200,
            h: 1920
        },
        square : {
            w : 1080,
            h: 1080
        },
        custom : {
            w : 1080,
            h: 1080
        },
    }
    let selectedType  = sizes[props.type ? props.type : 'custom']
    if(props.type == "custom")
    {
        selectedType.w = (props.w)?props.w:selectedType.w
        selectedType.h = (props.h)?props.h:selectedType.h
    }
    return (

        <div className=''>
            <span className='TextInput-Lable'>
                {props.label ? props.label : Language().image}
            </span>
            <div className='w-24 h-24 overflow-hidden relative'>
                <div
                    className='absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl bg-cover bg-center'
                    style={{
                        backgroundImage: `url(${croppedImagePreview})`,
                    }} >
                </div>
                <AvatarSelector
                    h={selectedType.h}
                    w={selectedType.w}
                    realsize = {props.realsize ? props.realsize : false}
                    onChange={(data)=>{
                        setCroppedImage(data)
                        setCroppedImagePreview(data)
                        if(props.onChange && typeof props.onChange == "function"){
                            props.onChange(data)
                        }
                    }}>
                </AvatarSelector>
                <input name={props.name} type="hidden" defaultValue={croppedImage} />
            </div>

        </div>
    )
}
