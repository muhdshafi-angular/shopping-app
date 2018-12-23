import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../../node_modules/@angular/fire/database';
import firestore from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create (products) {
    return this.db.list('/products').push(products);
  }

  getAll() {
    return this.db.list('/products');
  }

  get(productId) {
    return this.db.object('/products/' + productId);
  }

  update(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId) {
    return this.db.object('/products/' + productId).remove();
  }
}
