import { Injectable } from "@angular/core";
import { Product } from "./product.service";
import { BehaviorSubject } from "rxjs";

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface Order {
    products: CartItem[];
    date: Date,
    details: any
}

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartKey = 'cart';
    private itemsSubject = new BehaviorSubject<CartItem[]>(this.loadCart());
    items$ = this.itemsSubject.asObservable();
    //items: CartItem[] = [];
    
    constructor() {}
    
    addToCart(p_product: Product) {
        const currentItems = this.items;
        
        const item = currentItems.find(element => element.product.id === p_product.id);
        
        if (item) {
            item.quantity++;
        }
        else {
            currentItems.push({product: p_product, quantity: 1});
        }
        this.saveCart(currentItems)
        this.itemsSubject.next(currentItems);
    }

    updateQuantity(p_product: Product, p_quantity: number) {
        const currentItems = this.items;
        const item = currentItems.find(element => element.product.id === p_product.id);
        
        if (item) {
            item.quantity = p_quantity;
        }
        this.saveCart(currentItems)
        this.itemsSubject.next(currentItems);
    }

    removeFromCart(p_product: Product) {
        const currentItems = this.items;
        const updatedItems = currentItems.filter(element => element.product.id !== p_product.id);

        this.saveCart(updatedItems)
        this.itemsSubject.next(updatedItems);
    }

    clearCart() {
        this.saveCart([]);
        this.itemsSubject.next([]);
    }

    private saveCart(p_items: CartItem[]) {
        localStorage.setItem(this.cartKey, JSON.stringify(p_items))
    }

    loadCart(): CartItem[] {
        const storageCart = localStorage.getItem(this.cartKey);
        return storageCart ? JSON.parse(storageCart) : [];
    }

    getTotalSum() {
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }

    get items() {
        return this.itemsSubject.value;
    }
}