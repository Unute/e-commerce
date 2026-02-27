import { CartStore } from "./CartStore";
import { ProductListStore } from "./ProductListStore";
import { ProductStore } from "./ProductStore";

export class RootStore {
  cartStore: CartStore;
  productListStore: ProductListStore;
  productStore: ProductStore;

  constructor() {
    this.cartStore = new CartStore(this);
    this.productListStore = new ProductListStore(this);
    this.productStore = new ProductStore(this);
  }
}
