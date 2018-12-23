import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../../node_modules/@angular/fire/database';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFireDatabase,
              private cartService: CartService) { }

  placeOrder(order) {
    const result = this.db.list('/orders').push(order);
    this.cartService.clearCart();
    return result;
  }
}
