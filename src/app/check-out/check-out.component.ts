import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../model/cart';
import { Observable, Subscription } from '../../../node_modules/rxjs';
import { OrderService } from '../services/order.service';
import { CartComponent } from '../cart/cart.component';
import { AuthService } from '../services/auth.service';
import { Order } from '../model/order';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {

  shipping = {};
  cart: Cart;
  userId: string;
  cartSubscription: Subscription;
  userSubscription: Subscription;

  constructor(private cartService: CartService,
              private orderService: OrderService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.cartSubscription = this.cartService.getCart().subscribe( cart => this.cart = cart);
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  placeOrder() {

    const order = new Order(this.userId, this.shipping, this.cart);

    this.orderService.placeOrder(order)
    .then(result => {
      this.router.navigate(['/order-success', result.key]);
    });

  }


}
