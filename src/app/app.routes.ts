import { Routes } from '@angular/router';
import { Cart } from './cart/cart';
import { Checkout } from './checkout/checkout';
import { Home } from './home/home';
import { ProductList } from './product-list/product-list';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'products', component: ProductList},
  {path: 'cart', component: Cart},
  {path: 'checkout', component: Checkout}
];
