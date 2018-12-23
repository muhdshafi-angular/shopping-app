import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/product';
import { Cart } from '../model/cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../model/cart-item';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent   {


// tslint:disable-next-line:no-input-rename
@Input ('product') product: Product;
  // tslint:disable-next-line:no-input-rename
@Input('cart') cart: Cart;

constructor(private cartService: CartService) { }


addToCart() {
  this.cartService.addToCart(this.product);
}

removeFromCart() {
  this.cartService.removeFromCart(this.product);
}




}
