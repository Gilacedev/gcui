"use client";
import {Get} from "@/components/functions/Basket";
import Badge from "@/components/Badge";
import ColorTypes from "@/components/functions/ColorTypes";
import Language from "@/locales/Language";
import {BasketStores} from "@/components/stores/BasketStore";

const ActionBarBasket = () => {
	const totalBasket = Get().length;
	if (totalBasket > 0) {
		return (
			<div className={"relative"}>
				<div onClick={() => {
					BasketStores.setBasket(true)
				}} className={"flex gap-2 flex-col items-center justify-center  h-16"}>
					<span className={"fa fa-shopping-basket-alt text-slate-400"}></span>
					<span className={"text-sm"}>
						{Language().order_basket}
					</span>
				</div>
				<div className={"absolute -top-2 left-1/2 "}>
					<Badge color={ColorTypes.danger}>{totalBasket}</Badge>
				</div>
			</div>
		)
	} else {
		return <div>
			<div onClick={() => {
				BasketStores.setBasket(true)
			}} className={"flex gap-2 flex-col items-center justify-center  h-16"}>
				<span className={"fa fa-shopping-basket-alt text-slate-400"}></span>
				<span className={"text-sm"}>
							{Language().order_basket}
						</span>
			</div>
		</div>;
	}
}
export default ActionBarBasket;