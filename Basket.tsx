"use client"
import { useEffect, useState, useSyncExternalStore } from "react";
import { BasketStores } from "@/components/stores/BasketStore";
import Modal from "@/components/Modal";
import { Get, Remove } from "@/components/functions/Basket";
import {Paragraph } from "@/components/Typo";
import { getPayable } from "@/models/PayableModel";
import Language from "@/locales/Language";
import ColorTypes from "@/components/functions/ColorTypes";
import Button from "@/components/Button";
import Login from "@/components/forms/Login";
import { AuthStores } from "@/components/stores/AuthStore";
import Loader from "@/components/Loader";
import Empty from "@/components/Empty";

const Basket = () => {
	const open = useSyncExternalStore(BasketStores.subscribe, BasketStores.getSnapshot, BasketStores.getServerSnapshot);
	const auth = useSyncExternalStore(AuthStores.subscribe, AuthStores.getSnapshot, AuthStores.getServerSnapshot);
	const [loadingContinue, setLoadingContinue] = useState(false);
	const [storageBasketItems, setStorageBasketItems] = useState([]);
	useEffect(() => {
		const basketItems = Get();
		setStorageBasketItems(basketItems);
	}, [open])

	//check in clientside to protect Hydration:
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	}, []);
	if (!isClient) {
		return null;
	}


	const PayableItem = ({ item }) => {
		const [payable, setPayable] = useState({});
		const [loading, setLoading] = useState(true);
		useEffect(() => {
			if (!item) {
				return;
			}
			setLoading(true);
			getPayable(parseInt(item)).then((res) => {
				setPayable(res);
				setLoading(false);
			})
		}, [item])

		return(<div>

			{
				payable && !loading &&
				<div className={"flex items-center gap-2 justify-between py-2"}>
					<div className={"text-green-400"}>
						{payable.content ? payable.content.title : ""}
					</div>
					<div className={"flex items-center"}>
						<div className={"text-slate-400"}>
							{payable.title}
						</div>
						<div className={"px-1"} >/</div>
						<div className={"text-slate-400"}>
							{
								payable.duration === "monthly" &&
								<div className={""}>
									{Language().monthly}
								</div>
							}
							{
								payable.duration === "yearly" &&
								<div className={""}>
									{Language().yearly}
								</div>
							}
							{
								payable.duration === "lifetime" &&
								<div className={""}>
									{Language().lifetime}
								</div>
							}
						</div>
					</div>
					<div className={"flex gap-1"}>
						<span>
							{new Intl.NumberFormat('fa-IR').format(payable.price)}
						</span>
						<span>
							{Language().price_unit}
						</span>
					</div>
					<div>
						<Button color={ColorTypes.danger} icon={<span className={"far fa-trash-alt"} />} onClick={() => {
							//remove from basket
							Remove(payable.id)
							const basketItems = Get();
							setStorageBasketItems(basketItems);

						}} />
					</div>
				</div>
			}
			{
				loading && <Loader />
			}
		</div>)
	}
	return (
		<Modal open={open} onClose={() => {
			BasketStores.setBasket(false)
		}} name={"basket-modal"} zindex={10}>
			<div className={"p-4 flex flex-col gap-2"}>
				<div className={"text-slate-300 pb-2 border-b border-slate-600/20 text-xl font-bold"}>
					<div>
						{Language().basket}
					</div>
				</div>
				<div className={"pb-2 border-b border-slate-600/20"}>
					{
						open && storageBasketItems.map((item, index) => {
							return <PayableItem key={index} item={item.id} />
						})
					}
					{
						storageBasketItems.length === 0 && <Empty amplitude={24} frequency={1.2} message={Language().emptyBasket} />
					}
				</div>
				{
					!auth && <Login login-for-shopping={true} />
				}
				{
					auth && <div className={"flex justify-end"}>
						<Button
							onClick={() => { setLoadingContinue(true) }}
							loading={loadingContinue ? 1 : 0}
							color={ColorTypes.primary} tag={"a"}
							href={"/management/pay"}
							icon={<span className={"far fa-chevron-left"} />}>
							{Language().continue}
						</Button>
					</div>
				}

			</div>
		</Modal>)
}
export default Basket