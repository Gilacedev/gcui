"use client"
import {useEffect, useState, useSyncExternalStore} from "react";
import {BasketStores} from "@/components/stores/BasketStore";
import Modal from "@/components/Modal";
import {Get, Remove} from "@/components/functions/Basket";
import {H1, Paragraph} from "@/components/Typo";
import {getPayable} from "@/models/PayableModel";
import Language from "@/locales/Language";
import ColorTypes from "@/components/functions/ColorTypes";
import Button from "@/components/Button";
import Login from "@/components/forms/Login";
import {AuthStores} from "@/components/stores/AuthStore";
import Loader from "@/components/Loader";

const Basket = () => {
	const open = useSyncExternalStore(BasketStores.subscribe, BasketStores.getSnapshot, BasketStores.getServerSnapshot);
	const auth = useSyncExternalStore(AuthStores.subscribe, AuthStores.getSnapshot, AuthStores.getServerSnapshot);
	const [storageBasketItems, setStorageBasketItems] = useState([]);
	useEffect(() => {
		const basketItems = Get();
		setStorageBasketItems(basketItems);
	}, [open])


	const PayableItem = ({item}) => {
		const [payable, setPayable] = useState({});
		const [loading, setLoading] = useState(true);
		useEffect(() => {
			if (!item) {
				return;
			}
			setLoading(true);
			getPayable(item).then((res) => {
				setPayable(res);
				setLoading(false);
			})
		}, [item])
		return <div>

			{
				payable && !loading &&
				<div className={"flex items-center gap-2 justify-between py-2"}>
					<div className={"text-green-400"}>
						{payable.content ? payable.content.title :""}
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
						<Button color={ColorTypes.danger} icon={<span className={"far fa-trash-alt"}/>} onClick={()=>{
							//remove from basket
							Remove(payable.slug)
							const basketItems = Get();
							setStorageBasketItems(basketItems);

						}}/>
					</div>
				</div>
			}
			{
				loading && <Loader />
			}
		</div>
	}
	return (
		<Modal open={open} onClose={()=>{
			BasketStores.setBasket(false)
		}} name={"basket-modal"} zindex={10}>
			<div className={"p-4 flex flex-col gap-2"}>
				<div className={"text-slate-300 pb-2 border-b border-slate-600"}>
					<Paragraph element={"div"}>سبد خرید</Paragraph>
				</div>
				<div className={"pb-2 border-b border-slate-600"}>
					{
						open && storageBasketItems.map((item, index) => {
							return <PayableItem key={index} item={item}/>
						})
					}

					{
						storageBasketItems.length === 0 ? <div className={"text-center"} >
							{Language().emptyBasket}
						</div> : ""
					}
				</div>
				{
					!auth && <Login/>
				}
				{
					auth && <div>Pay </div>
				}

			</div>
		</Modal>)
}
export default Basket