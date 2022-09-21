import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoryComponent } from './pages/category/category.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { ProductComponent } from './pages/product/product.component';
import { ReserveComponent } from './pages/reserve/reserve.component';

const routes: Routes=[
  {path: 'home',component: HomeComponent},
  {path: 'category',component: CategoryComponent},
  {path: 'reserve',component: ReserveComponent},
  {path: 'product',component: ProductComponent},
  {path: 'cart',component: CartComponent},
  {path: 'checkout',component: CheckoutComponent},
  {path: 'about',component: AboutComponent},
  {path: '',redirectTo: '/home', pathMatch: 'full'},
  {path: '**',component: NopagefoundComponent},

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
