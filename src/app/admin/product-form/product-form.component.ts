import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { take } from '../../../../node_modules/rxjs/operators';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product: Product = new Product();
  id;

  constructor(  categoryService: CategoryService,
                private productService: ProductService,
                private router: Router,
                private route: ActivatedRoute
               ) {

      this.categories$ = categoryService.getCategories();
      this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.productService.get(this.id).snapshotChanges().pipe(
          take(1) // automatically end subscription after 1:not required here, for demo
        ).subscribe(data => {
          const p = data.payload.toJSON();
          p['$key'] = data.key;
          this.product = p as Product;
        });
      }
  }

  ngOnInit() {
  }

  save(product) {
    console.log(product);
    if (this.id) {
      this.productService.update(this.id, product);
    } else {
      this.productService.create(product);
    }

    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (confirm('Are you sure you wnat to delete this product?')) {
      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);
    }
  }


}
