import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../model/cart';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  @Input() cart: Cart;

  constructor() { }

  ngOnInit() {
  }

}
