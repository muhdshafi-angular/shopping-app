import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { CartService } from '../services/cart.service';
import { Cart } from '../model/cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  filteredroducts: Product[] = [];
  drawAllCategory = false;
  category: string;
  cart: Cart;

  constructor(  private productService: ProductService,
                route: ActivatedRoute,
                cartService: CartService
                ) {
    productService.getAll().snapshotChanges().subscribe(data => {
      const startDate = new Date();

      data.forEach(item => {
          const p = item.payload.toJSON();
          p['$key'] = item.key;
          this.products.push(p as Product);
      });
this.drawAllCategory = true; // just for better UX
const endDate   = new Date();
const MilliSeconds = (endDate.getTime() - startDate.getTime());
console.log('Time taken:', MilliSeconds);
      // nested observable, 2nd should be executed only after 1st(better way swithMap())
      route.queryParamMap.subscribe(param => {
        this.category = param.get('category');
        this.filteredroducts = (this.category) ?
              this.products.filter( product => product.category === this.category) :
              this.products;
       });
    }
    );

    cartService.getCart().subscribe(cart => {
      this.cart = cart;
    });


   }

  ngOnInit() {
  }

}
