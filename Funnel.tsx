"use client"
import Button from "@/components/Button";
import ColorTypes from "@/components/functions/ColorTypes";
import Language from "@/locales/Language";
import Radio from "@/components/Radio";
import Modal from "@/components/Modal";
import {useState} from "react";
import {useRouter} from "next/navigation";

const Funnel = () => {
	const submitProposal_url:string = "https://forms.gle/xNFSMzqzeait3hxG6";
	const requestACall_url:string = "https://forms.gle/k8ntxuX5kkUNEnwV7";
	const [temporarySelected, setTemporarySelected] = useState(1);
	const [step, setStep] = useState(1);
	const [modalOpen, setModalOpen] = useState(false);
	const router = useRouter();

	const onChangeRadio = (requestedStep:number)=>{
		if(requestedStep == 1 && temporarySelected == 1){
			setStep(2)
		}
		if(requestedStep == 1 && temporarySelected == 2){
			setStep(3)
		}
		if(requestedStep == 1 && temporarySelected == 3){
			setStep(4)
		}
		if(requestedStep == 2 && temporarySelected == 1){
			setModalOpen(false)
			router.push("products/gshop2")
		}
		if(requestedStep == 2 && temporarySelected == 2){
			setModalOpen(false)
			router.push("products/gshop1")
		}
		if(requestedStep == 2 && temporarySelected == 3){
			setModalOpen(false)
			router.push("products/gcast")
		}
		if(requestedStep == 2 && temporarySelected == 4){
			setModalOpen(false)
			router.push("products/gpromax")
		}
		if(requestedStep == 3 && temporarySelected == 1){
			setModalOpen(false)
			router.push("products/gprolite")
		}
		if(requestedStep == 3 && temporarySelected == 2){
			setModalOpen(false)
			let url = window.open(requestACall_url, '_blank')
			url && url.focus();
		}
		if(requestedStep == 4 && temporarySelected == 1){
			setModalOpen(false)
			let url = window.open(submitProposal_url, '_blank');
			url && url.focus();
		}
		if(requestedStep == 4 && temporarySelected == 2){
			setModalOpen(false)
			let url = window.open(requestACall_url, '_blank');
			url && url.focus();
		}
	}
	return (
		<div>
			<Button onClick={()=>{
				setModalOpen(true)
			}} color={ColorTypes.primary} icon={<span className={"fa fa-chevron-left"}></span> as React.ReactNode}
					particular={true}>
				{Language().start}
			</Button>
			<Modal open={modalOpen} onClose={() => {
				setModalOpen(false)
			}} name={"funnle-modal"} zindex={20}>
				<div className={"p-4"}>
					<header className={" flex gap-2 text-2xl pb-4 font-light border-b border-b-white/10 "}>
						<div>
							<span className={"far fa-robot text-violet-400"}></span>
						</div>
						<div>
							خرید سریع وبسایت
						</div>
					</header>
					{
						step == 1 &&
						<div>
							<div className={"py-4"}>
								<div>
									<div className={"text-slate-400"}>
										شما به دنبال چه نوع وبسایت / اپلیکیشنی هستید ؟
									</div>
								</div>
								<ul>
									<li>
										<Radio name={"funnel"} onChange={() => {
											setTemporarySelected(1)
										}} >
											<div className={"ps-2"}>
												<div>
													فروشگاه اینترنتی
												</div>
												<div className={"text-xs opacity-60 pt-2"}>
													کلیه سرویس هایی که برای فروش کالا یا خدمات به کار می روند و با درگاه
													پرداخت
													کار
													میکنند
												</div>
											</div>
										</Radio>
									</li>
									<li>
										<Radio name={"funnel"} onChange={() => {
											setTemporarySelected(2)
										}}>
											<div className={"ps-2"}>
												<div>
													وبسایت شرکتی / شخصی
												</div>
												<div className={"text-xs opacity-60 pt-2"}>
													کلیه سرویس هایی که برای ارائه اطلاعات و خدمات به صورت آنلاین به کاربران
													به کار میروند و
													فرایند
													<span className={"underline-offset-2 underline font-bold px-2"}>
													فروش با درگاه پرداخت ندارند
												</span>
													.
												</div>
											</div>
										</Radio>
									</li>
									<li>
										<Radio name={"funnel"} onChange={() => {
											setTemporarySelected(3)
										}}>
											<div className={"ps-2"}>
												<div>
													درخواست راهکار اختصاصی
												</div>
												<div className={"text-xs opacity-60 pt-2"}>
													اگر به دنبال راهکارهای خاص و حرفه‌ای برای کسب‌وکار خود هستید یا نیاز به
													مشاوره تخصصی دارید، ما آماده‌ایم تا شما را به ابرقدرت منطقه تبدیل کنیم.
												</div>
											</div>
										</Radio>
									</li>
								</ul>
							</div>
							<footer>
								<Button color={ColorTypes.primary} onClick={() => {
									onChangeRadio(1)
								}}>
									{Language().next}
								</Button>
							</footer>
						</div>
					}
					{
						step == 2 &&
                        <div>
                            <div className={"py-4"}>
                                <div>
                                    <div className={"text-slate-400"}>
                                        کدوم فروشگاه مناسب شماست ؟
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <Radio name={"funnel"} onChange={() => {
											setTemporarySelected(1)
										}} >
                                            <div className={"ps-2"}>
                                                <div>
                                                    فروشگاه اینترنتی G-SHOP 2.0
                                                </div>
                                                <div className={"text-xs opacity-60 pt-2"}>
                                                    جدیدترین تکنولوژی حوزه فروشگاه اینترنتی با تنوع
                                                    قیمتی و پرداخت ماهانه و سالانه و پشتیبانی از بخش قابل توجهی از ماژول
                                                    های فروش حرفه ای
                                                </div>
                                            </div>
                                        </Radio>
                                    </li>
                                    <li>
                                        <Radio name={"funnel"} onChange={() => {
											setTemporarySelected(2)
										}}>
                                            <div className={"ps-2"}>
                                                <div>
                                                    فروشگاه اینترنتی G-SHOP 1
                                                </div>
                                                <div className={"text-xs opacity-60 pt-2"}>
                                                    نسخه پایدار و کامل فروشگاه اینترنتی . این سرویس با رابط کاربری
                                                    اختصاصی و به صورت فول ماژول ارائه می شود.
                                                </div>
                                            </div>
                                        </Radio>
                                    </li>
                                    <li>
                                        <Radio name={"funnel"} onChange={() => {
											setTemporarySelected(3)
										}}>
                                            <div className={"ps-2"}>
                                                <div>
                                                    فروش محصولات رسانه ای و دیجیتال G-CAST
                                                </div>
                                                <div className={"text-xs opacity-60 pt-2"}>
                                                    فروشگاه اینترنتی محصولات رسانه ای و دیجیتال مانند فیلم، موزیک، کتاب
                                                    اکترونیک .
                                                    این سرویس به همراه یک اپلیکیشن اندروید ارائه می شود.
                                                </div>
                                            </div>
                                        </Radio>
                                    </li>
                                    <li>
                                        <Radio name={"funnel"} onChange={() => {
											setTemporarySelected(3)
										}}>
                                            <div className={"ps-2"}>
                                                <div>
                                                    سرویس SAAS شرکت گیلاس با عنوان G-PRO Max
                                                </div>
                                                <div className={"text-xs opacity-60 pt-2"}>
                                                    اگر خدمات SAAS (= software as a service) دارید که به صورت ماهانه
                                                    نیاز به دریافت وجه از کاربران و ایجاد فاکتور دارید
                                                    و سرویس های زمان دار ارائه می دهید این سرویس پیشرفته مناسب شماست.
                                                </div>
                                            </div>
                                        </Radio>
                                    </li>
                                </ul>
                            </div>
                            <footer className={"flex gap-2"}>
								<div>
									<Button color={ColorTypes.default} onClick={() => {
										setTemporarySelected(1)
										setStep(1)
									}}>
										{Language().back}
									</Button>
								</div>
								<div>
                                    <Button color={ColorTypes.primary} onClick={() => {
										onChangeRadio(2)
									}}>
										{Language().next}
                                    </Button>
								</div>
                            </footer>
                        </div>

					}
					{
						step == 3 &&
                        <div>
                            <div className={"py-4"}>
                                <div>
                                    <div className={"text-slate-400"}>
                                        دنبال چه نوع سرویسی هستید ؟
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <Radio name={"funnel"} onChange={() => {
											setTemporarySelected(1)
										}} >
                                            <div className={"ps-2"}>
                                                <div>
                                                    محصول وبسایت شرکتی G-PRO LITE
                                                </div>
                                                <div className={"text-xs opacity-60 pt-2"}>
                                                    این محصول یک وب‌سایت محتوامحور پیشرفته است که امکان ایجاد و مدیریت
                                                    انواع محتوا را با رابط کاربری جذاب و حرفه‌ای فراهم می‌کند
                                                    . محتواهای شما می‌توانند شامل خدمات، محصولات و پروژه‌ها باشند و به
                                                    شکلی منحصربه‌فرد به نمایش درآیند.
                                                    محصول G-PRO LITE با طراحی رابط کاربری
                                                    اختصاصی و تجربه‌ای بی‌نظیر
                                                    ارائه می‌شود تا کسب‌وکار شما را به سطح جدیدی از حرفه‌ای بودن برساند.
                                                </div>
                                            </div>
                                        </Radio>
                                    </li>
                                    <li>
                                        <Radio name={"funnel"} onChange={() => {
											setTemporarySelected(2)
										}}>
                                            <div className={"ps-2"}>
                                                <div>
                                                    سرویس اختصاصی با ماژول های اختصاصی
                                                </div>
                                                <div className={"text-xs opacity-60 pt-2"}>
                                                    در صورتی که نیازمندی خاصی برای ثبت و نمایش اطلاعات خود دارید و یا
                                                    نیاز
                                                    به ارتباط با سیستم های دیگر دارید این گزینه را انتخاب کنید
                                                </div>
                                            </div>
                                        </Radio>
                                    </li>
                                </ul>
                            </div>
                            <footer className={"flex gap-2"}>
                                <div>
                                    <Button color={ColorTypes.default} onClick={() => {
										setTemporarySelected(1)
										setStep(1)
									}}>
										{Language().back}
                                    </Button>
                                </div>
                                <div>
                                    <Button color={ColorTypes.primary} onClick={() => {
										onChangeRadio(3)
									}}>
										{Language().next}
                                    </Button>
                                </div>
                            </footer>
                        </div>
					}
					{
						step == 4 &&
                        <div>
                            <div className={"py-4"}>
                                <div>
                                    <div className={"text-slate-400"}>
                                        محصولات شرکت گیلاس پاسخگوی نیاز شما نیست و شما نیاز به یک سرویس کاملا اختصاصی
                                        دارید
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <Radio name={"funnel"} onChange={() => {
											setTemporarySelected(1)
										}} >
                                            <div className={"ps-2"}>
                                                <div>
                                                    یک پروپوزال آماده به صورت مستند دارم
                                                </div>
                                                <div className={"text-xs opacity-60 pt-2"}>
                                                    اگر پروپوزالی برای پیاده سازی سیستم خود دارید و یا نیاز برآورد قیمتی
                                                    و
                                                    زمانی دارید
                                                    این گزینه را انتخاب کنید
                                                </div>
                                            </div>
                                        </Radio>
                                    </li>
                                    <li>
                                        <Radio name={"funnel"} onChange={() => {
											setTemporarySelected(2)
										}}>
                                            <div className={"ps-2"}>
                                                <div>
                                                    نیاز به مشاوره برای تهیه سرویس دارم
                                                </div>
                                                <div className={"text-xs opacity-60 pt-2"}>
                                                    شما درخواست خود را با اپراتورهای ما در میان بگذارید و ما برای شما یک
                                                    جلسه مشاوره رایگان تعیین میکنیم
                                                </div>
                                            </div>
                                        </Radio>
                                    </li>
                                </ul>
                            </div>
                            <footer className={"flex gap-2"}>
                                <div>
                                    <Button color={ColorTypes.default} onClick={() => {
										setTemporarySelected(1)
										setStep(1)
									}}>
										{Language().back}
                                    </Button>
                                </div>
                                <div>
                                    <Button color={ColorTypes.primary} onClick={() => {
										onChangeRadio(4)
									}}>
										{Language().next}
                                    </Button>
                                </div>
                            </footer>
                        </div>
					}
				</div>
			</Modal>
		</div>
	);
}
export default Funnel;