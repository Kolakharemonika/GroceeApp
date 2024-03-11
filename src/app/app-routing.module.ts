import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './categories/category.component';
import { ShopListComponent } from './shop-list/shoplist.component';
import { ProductInfoComponent } from './product-info/product-info.component';

import { ProfileComponent } from './profile/profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { AddressComponent } from './address/address.component';
import { ContactComponent } from './contact-us/contact.component';
import { OrdersListComponent } from './order-list/orders.component';
import { CartComponent } from './cart/cart.component';
import { ErrorComponent } from './error/error.component';
import { DeliveryAddressComponent } from './address/delivery-address.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './checkout/payment.component';
import { CompletedComponent } from './checkout/completed.component';
import { LoginComponent } from './checkout/login/login.component';
import { PrivacyComponent } from './about-us/privacy.component';
import { TermsConditionComponent } from './about-us/terms.component';
import { AboutUsTabComponent } from './about-us/about-us-tab.component';
import { WishListComponent } from './wish-list/wishlist.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginDetailsComponent } from './Login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'log-details', component: LoginDetailsComponent },
  { path: 'Category', component: CategoryComponent },
  { path: 'Shoplist', component: ShopListComponent },
  { path: 'Product', component: ProductInfoComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'Create-user', component: CreateUserComponent },
  {
    path: 'Checkout', component: CheckoutComponent,
    children: [
      { path: '', redirectTo: 'Checkout', pathMatch: 'full' },
      { path: '', component: DeliveryAddressComponent }, // LoginComponent
      { path: 'DeliveryAddress', component: DeliveryAddressComponent },
      { path: 'Completed', component: CompletedComponent },
      { path: 'Payment', component: PaymentComponent },
    ]
  },
  { path: 'Profile', component: ProfileComponent },
  { path: 'Address', component: AddressComponent },
  { path: 'Orders', component: OrdersListComponent },
  {
    path: 'About-Us', component: AboutUsTabComponent ,
    children: [
      { path: '', redirectTo: 'About-Us', pathMatch: 'full' },
      { path: '', component: AboutUsComponent },
      { path: 'Privacy', component: PrivacyComponent },
      { path: 'Terms', component: TermsConditionComponent },
    ]
  },
  { path: 'Wishlist', component: WishListComponent },
  { path: 'Faq', component: FaqComponent },
  { path: 'Contact-Us', component: ContactComponent },
  { path: 'Error', component: ErrorComponent },

  { path: 'DeliveryAddress', component: DeliveryAddressComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
