import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$;
  // tslint:disable-next-line:no-input-rename
  @Input('category-filter') categoryFilter;
  // tslint:disable-next-line:no-input-rename
  @Input('draw-all') drawAll;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit() {
  }

}
