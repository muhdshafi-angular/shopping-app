import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
import { AuthService } from 'src/app/services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UserService } from 'src/app/services/user.service';
import { AdminGuardService } from 'src/app/services/admin-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from 'src/app/services/category.service';
import { FormsModule } from '../../node_modules/@angular/forms';
import { ProductService } from './services/product.service';
import {CustomFormsModule} from 'ng2-validation';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartService } from './services/cart.service';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { OrderService } from './services/order.service';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    CustomFormsModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdminGuardService,
    UserService,
    CategoryService,
    ProductService,
    CartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
