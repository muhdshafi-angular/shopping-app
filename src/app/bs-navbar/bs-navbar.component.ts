import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from '../model/cart';
import { map } from '../../../node_modules/rxjs/operators';


@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

   quantityTotal = 0;

 // it is used in template, otherwise in prod we will get error
  constructor(public authService: AuthService,
              private cartService: CartService) {
      cartService.getCart()
      .subscribe(cartResult => {
        this.quantityTotal = cartResult.totalItemsCount;
      });
   }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {

  }


}
