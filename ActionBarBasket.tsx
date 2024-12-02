"use client";
import {Get} from "@/components/functions/Basket";
import Badge from "@/components/Badge";
import ColorTypes from "@/components/functions/ColorTypes";
import Language from "@/locales/Language";
import {BasketStores} from "@/components/stores/BasketStore";
import {useEffect, useState, useSyncExternalStore} from "react";
import { BasketCountStores } from "./stores/BasketCountStore";
import colorTypes from "@/components/functions/ColorTypes";

const ActionBarBasket = () => {
	const [totalBasket , setTotalBasket] = useState(0)
	const count = useSyncExternalStore(BasketCountStores.subscribe, BasketCountStores.getSnapshot, BasketCountStores.getServerSnapshot);
	useEffect(()=>{
		let total = Get()
		setTotalBasket(total?total.length:0)
	},[])
	return (
		<div className={"relative"}>
			<div onClick={() => {
				BasketStores.setBasket(true)
			}} className={"flex gap-2 flex-col items-center justify-center  h-16"}>
				<span className={"fa fa-shopping-basket-alt text-slate-400"}></span>
				<span className={"text-xs"}>
					{Language().order_basket}
				</span>
			</div>
			{
				totalBasket > 0 &&
                <div className={"absolute -top-2 left-1/2 "}>
                    <Badge color={colorTypes.primary}>{count}</Badge>
                </div>
			}
		</div>
	)
}
export default ActionBarBasket;