"use client"
import {useCookies} from 'react-cookie';
import {useState} from "react";
import Language from "@/locales/Language";
import Button from "@/components/Button";
import ColorTypes from "@/components/functions/ColorTypes";


const ConsentBanner = ({settings}: {settings: {
		[key: string]: string
	}}) => {

	const [consentModal, setConsentModal] = useState(false);
	const [cookies, setCookie] = useCookies(['consent']);
	const acceptCookie = () => {
		setCookie('consent', 'true', { path: '/' });
	}
	const rejectCookie = () => {
		setCookie('consent', 'false', { path: '/' });
	}
	return (
		<div>
			{
				cookies.consent === undefined &&
				<div className="fixed z-40 bottom-0 left-0 right-0 bg-slate-900 text-slate-100 p-4">
					<div className="container mx-auto">
						<div className={"py-2 text-lg"}>
							{Language().consent_header}
						</div>
						<div className={"pb-4 text-slate-400"}>
							{Language().consent_text}
						</div>
						<div className={"flex gap-2"}>
							<div>
                                <Button onClick={() => acceptCookie()} color={ColorTypes.primary}>{Language().accept}</Button>
							</div>
							<div>
								<Button onClick={() => rejectCookie()} color={ColorTypes.default}>{Language().reject}</Button>
							</div>
						</div>
					</div>
				</div>
			}
			{
				cookies.consent === "true" &&
				settings && settings.google_analytics &&
                <div id={"google_analytics"}  dangerouslySetInnerHTML={{__html: settings.google_analytics}}/>
			}
		</div>
	);
	{
	}

}
export default ConsentBanner;