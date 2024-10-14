
//menu store :
let authListener = [];
let auth = false;

export const AuthStores = {
	setAuth(status) {
		auth = status;
		emitAuthChange();
	},
	subscribe(listener) {
		authListener = [...authListener, listener];
		return () => {
			authListener = authListener.filter(l => l !== listener);
		};
	},
	getSnapshot() {
		return auth;
	},
	getServerSnapshot: (() => { return auth })
};


function emitAuthChange() {
	for (let listener of authListener) {
		listener();
	}
}