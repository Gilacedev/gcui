
//menu store :
let basketCountListener = [];
let basketCount = 0;

export const BasketCountStores = {
	setBasketCount(status) {
		basketCount = status;
		emitBasketCountChange();
	},
	subscribe(listener) {
		basketCountListener = [...basketCountListener, listener];
		return () => {
			basketCountListener = basketCountListener.filter(l => l !== listener);
		};
	},
	getSnapshot() {
		return basketCount;
	},
	getServerSnapshot: (() => { return basketCount })
};


function emitBasketCountChange() {
	for (let listener of basketCountListener) {
		listener();
	}
}