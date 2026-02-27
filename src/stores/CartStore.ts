import { makeAutoObservable, runInAction } from "mobx";
import type { Product } from "@/types/product";

export type CartItem = {
  product: Product;
  quantity: number;
};

const STORAGE_KEY = "cart";

export class CartStore {
  items: CartItem[] = [];

  constructor() {
    makeAutoObservable(this);
    this._loadFromStorage();
  }

  // computed
  get totalCount(): number {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  get totalPrice(): number {
    return this.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }

  isInCart = (documentId: string): boolean => {
    return this.items.some((item) => item.product.documentId === documentId);
  };

  // actions
  addToCart = (product: Product) => {
    const existing = this.items.find(
      (item) => item.product.documentId === product.documentId
    );
    if (existing) {
      existing.quantity += 1;
    } else {
      this.items.push({ product, quantity: 1 });
    }
    this._saveToStorage();
  };

  removeFromCart = (documentId: string) => {
    this.items = this.items.filter(
      (item) => item.product.documentId !== documentId
    );
    this._saveToStorage();
  };

  decreaseQuantity = (documentId: string) => {
    const existing = this.items.find(
      (item) => item.product.documentId === documentId
    );
    if (!existing) return;
    if (existing.quantity <= 1) {
      this.removeFromCart(documentId);
    } else {
      existing.quantity -= 1;
      this._saveToStorage();
    }
  };

  clearCart = () => {
    this.items = [];
    this._saveToStorage();
  };

  private _saveToStorage = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
    } catch (error) {
      throw new Error("Failed to save cart to localStorage: " + error);
    }
  };

  private _loadFromStorage = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        runInAction(() => {
          this.items = parsed;
        });
      }
    } catch (error) {
      throw new Error("Failed to load cart from localStorage: " + error);
    }
  };
}

export const cartStore = new CartStore();