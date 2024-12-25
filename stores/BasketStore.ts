
type BasketListener = () => void;

let basketListener: BasketListener[] = []; 
let basket = false;

export const BasketStores = {
  setBasket(status: boolean) { 
    basket = status;
    emitBasketChange();
  },
  subscribe(listener: BasketListener) { 
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
    listener(); // Call each listener
  }
}
