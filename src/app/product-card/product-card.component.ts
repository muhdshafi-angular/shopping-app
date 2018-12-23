import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';
import { Cart } from '../model/cart';
import { CartItem } from '../model/cart-item';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input ('product') product: Product;
  // tslint:disable-next-line:no-input-rename
  @Input('show-actions') showActions = true;
    // tslint:disable-next-line:no-input-rename
  @Input('cart') cart: Cart;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

}
