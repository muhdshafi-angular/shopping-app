import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../model/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart = new Cart({});

  constructor(private cartService: CartService) {
    cartService.getCart().subscribe(cart => {
      this.cart = cart;
    });

  }

  clearCart() {
    this.cartService.clearCart();
  }

  ngOnInit() {
  }

}
