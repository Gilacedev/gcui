
//menu store :
let basketListener = [];
let basket = false;

export const BasketStores = {
	setBasket(status) {
		basket = status;
		emitBasketChange();
	},
	subscribe(listener) {
		basketListener = [...basketListener, listener];
		return () => {
			basketListener = basketListener.filter(l => l !== listener);
		};
	},
	getSnapshot() {
		return basket;
	},
	getServerSnapshot: (() => { return basket })
};


function emitBasketChange() {
	for (let listener of basketListener) {
		listener();
	}
}