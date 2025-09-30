import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  products = [
    { name: 'Hammer', price: 12.99 },
    { name: 'Screwdriver', price: 7.99 },
    { name: 'Wrench', price: 9.99 },
    { name: 'Drill', price: 49.99 },
    { name: 'Saw', price: 19.99 },
    { name: 'Pliers', price: 8.99 },
    { name: 'Level', price: 14.99 },
    { name: 'Tape Measure', price: 6.99 },
    { name: 'Chisel', price: 11.99 },
    { name: 'Utility Knife', price: 5.99 },
    { name: 'Flashlight', price: 15.99 },
    { name: 'Ladder', price: 89.99 },
    { name: 'Nails (1 lb)', price: 3.99 },
    { name: 'Screws (1 lb)', price: 4.99 },
    { name: 'Glue', price: 2.99 },
    { name: 'Sandpaper (10 sheets)', price: 1.99 },
    { name: 'Paint (1 gallon)', price: 24.99 },
    { name: 'Brush', price: 4.49 },
    { name: 'Roller', price: 6.49 },
    { name: 'Drop Cloth', price: 7.49 }
  ];

	private readonly _cartItems = signal<any[]>([]);

		get cartItems(): any[] {
			return this._cartItems();
		}

	addToCart(product: any) {
		const items = this._cartItems();
		const existing = items.find(i => i.name === product.name);
		if (existing) {
			existing.quantity++;
		} else {
			items.push({ ...product, quantity: 1 });
		}
		this._cartItems.set([...items]);
	}

	clearCart() {
		this._cartItems.set([]);
	}

	getTotal() {
		return this._cartItems().reduce((sum, item) => sum + item.price * item.quantity, 0);
	}
}
