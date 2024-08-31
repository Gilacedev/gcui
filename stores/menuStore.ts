
//menu store :
let menuListener = [];
let menu = false;

export const MenuStores = {
	setMenu(status) {
		menu = status;
		emitMenuChange();
	},
	subscribe(listener) {
		menuListener = [...menuListener, listener];
		return () => {
			menuListener = menuListener.filter(l => l !== listener);
		};
	},
	getSnapshot() {
		return menu;
	},
	getServerSnapshot: (() => { return menu })
};


function emitMenuChange() {
	for (let listener of menuListener) {
		listener();
	}
}