"use client"
import {useState} from "react";

type ImageSliderProps = {
	media:string[];
	alt :string;
}
function get_url_extension( url:string ) {
	return url.split(/[#?]/)[0].split('.').pop()?.trim();
}

const ImageSlider = ({media,alt}: Readonly<ImageSliderProps>) => {
	const [localMedia] = useState(media || []);
	const [currentMedia, setCurrentMedia] = useState(0);
	return (
		<div>
			<div className={"h-96 bg-slate-300 rounded-xl"}>
				{
					get_url_extension(localMedia[0]) === "mp4" &&
                    <video>
                        <source src={localMedia[currentMedia]} type="video/mp4"/>
                    </video>
				}
				{
					//if in array ["jpg","jpeg","png","gif"]
					["jpg", "jpeg", "png", "gif"].includes(get_url_extension(localMedia[0])??"") &&
                    <img src={localMedia[currentMedia]} alt={alt} className={"w-full h-full object-cover rounded-xl"}/>
				}
			</div>
			<div className={"flex flex-nowrap gap-2 overflow-x-scroll overflow-y-hidden pt-3 w-full"}>
				{
					media.map((item, index) => {
						return <div key={index} className={"relative"} >
							<div className={`w-20 cursor-pointer transition-all ${index === currentMedia ? "-translate-y-1" : ""}`} onClick={()=>{setCurrentMedia(index)}} >
								{
									get_url_extension(item) === "mp4" &&
									<video>
										<source src={item} type="video/mp4"/>
									</video>
								}
								{
									//if in array ["jpg","jpeg","png","gif"]
									["jpg", "jpeg", "png", "gif"].includes(get_url_extension(item)??"") &&
									<img src={item} alt={alt} className={"w-full h-full object-cover rounded-xl"}/>
								}
                                    <div className={`rounded absolute left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-500 transition-all duration-300 bottom-0 ${currentMedia === index ? " opacity-100 blur-0" : "blur-md  translate-y-4" }`}></div>
							</div>
						</div>
					})
				}
			</div>
		</div>)
}
export default ImageSlider;