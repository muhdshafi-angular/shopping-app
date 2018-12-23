import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../../node_modules/@angular/fire/database';
import { query } from '../../../node_modules/@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getCategories () {
    return this.db.list('/categories', ref  => ref.limitToLast(10)
                        .orderByChild('name'))
                        .valueChanges();
  }
}
