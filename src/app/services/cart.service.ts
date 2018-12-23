import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../../node_modules/@angular/fire/database';
import { Product } from '../model/product';
import { take, map } from '../../../node_modules/rxjs/operators';
import { Cart } from '../model/cart';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
   return  this.db.list('/cart').push({
      dateCreated: new Date().getTime()
    });
  }

  private getOrCreateCartId() {
    const cartId = localStorage.getItem('cartId');
    if (cartId) { // alternative is to use asyn op
      return cartId;
    } else {
        this.create().then(result => {
        localStorage.setItem('cartId', result.key);
        return result.key;
      });
    }

  }

  private getItem(cartId: string, productId: string) {
    return this.db.object('/cart/' + cartId + '/items/' + productId);
  }

  addToCart(product: Product) {
    this.updateQty(product, 1);
  }

  removeFromCart (product: Product) {
    this.updateQty(product, -1);
  }

  private updateQty(product: Product, change: number) {
    const cartId = this.getOrCreateCartId();
    const item$ = this.getItem(cartId, product.$key);
    item$.snapshotChanges().pipe(
      take(1)
    ).subscribe(item => {
      if (item.payload.exists()) {
        const count: number = item.payload.val()['quantity'] as number + change;
            if (count > 0) {
              item$.update({quantity: count});
            } else {
              item$.remove();
            }
      } else {
        item$.set({
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1
        });
      }
    });
  }

  getCart(): Observable<Cart> {
    const cartId = this.getOrCreateCartId();
    return this.db.object('/cart/' + cartId).snapshotChanges().pipe(
      map(cartDb => {
        if (cartDb.payload.exists) {
          return new Cart(cartDb.payload.val()['items']);
        } else {
          return new Cart({});
        }
      })
    );
  }

  clearCart () {
    const cartId = this.getOrCreateCartId();
    return this.db.object('/cart/' + cartId + '/items').remove();
  }

}
