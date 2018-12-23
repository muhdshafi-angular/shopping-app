import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminGuardService } from './services/admin-guard.service';
import { ProductFormComponent } from 'src/app/admin/product-form/product-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService] },
  { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminGuardService] },
  { path: 'admin/products/new', component: ProductFormComponent, canActivate:
                                        [AuthGuardService, AdminGuardService]},
  { path: 'admin/products/:id', component: ProductFormComponent, canActivate:
                                        [AuthGuardService, AdminGuardService]},
  { path: 'admin/products', component: AdminProductsComponent, canActivate:
                                        [AuthGuardService, AdminGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
