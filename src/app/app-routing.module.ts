import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './categories/category.component';
import { ShopListComponent } from './shop-list/shoplist.component';
import { SingleProductComponent } from './single-product/single-product.component';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { AddressComponent } from './address/address.component';
import { ContactComponent } from './contact-us/contact.component';
import { OrdersListComponent } from './order-list/orders.component';
import { CartComponent } from './cart/cart.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Category', component: CategoryComponent },
  { path: 'Shoplist', component: ShopListComponent },
  { path: 'Product', component: SingleProductComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'Checkout', component: LoginComponent },
  { path: 'Profile', component: ProfileComponent },
  { path: 'Address', component: AddressComponent },
  { path: 'Orders', component: OrdersListComponent },
  { path: 'About-Us', component: AboutUsComponent },
  { path: 'Faq', component: FaqComponent },
  { path: 'Contact-Us', component: ContactComponent },
  { path: 'Error', component: ErrorComponent },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
