import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {
        productService.getAll().snapshotChanges().subscribe(data => {
            data.forEach(item => {
                const p = item.payload.toJSON();
                p['$key'] = item.key;
                this.products.push(p as Product);
            });
       }
    );
    this.filteredProducts = this.products;

  }


  filter(queryString: string) {
    console.log('queryString: ', queryString);
    this.filteredProducts = (queryString) ?
        this.products.filter(product => (product.title as string)
                                            .toLocaleLowerCase()
                                            .includes(queryString.toLowerCase())) :
        this.products;
  }

  ngOnInit() {
  }



}
