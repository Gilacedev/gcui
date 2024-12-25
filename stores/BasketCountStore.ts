

type BasketCountListener = () => void;

let basketCountListener: BasketCountListener[] = []; 
let basketCount = 0;

export const BasketCountStores = {
  setBasketCount(status: number) {
    basketCount = status;
    emitBasketCountChange();
  },
  subscribe(listener: BasketCountListener) { 
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
