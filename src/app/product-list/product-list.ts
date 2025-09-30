import { Component, signal,OnInit } from '@angular/core';
import { CartService } from '../services/cart';
@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {
  public dataArray: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.dataArray = this.cartService.products;
  }

}
