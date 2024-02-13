import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { CategoryComponent } from './categories/category.component';
import { ShopListComponent } from './shop-list/shoplist.component';
import { SingleProductComponent } from './single-product/single-product.component';

import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { AddressComponent } from './address/address.component';
import { ContactComponent } from './contact-us/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { OrdersListComponent } from './order-list/orders.component';
import { CartComponent } from './cart/cart.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [AppComponent, HomeComponent,
     HeaderComponent, CategoryComponent,
    OrdersListComponent,
    AddressComponent, ContactComponent, ProfileComponent,
    LoginComponent, AboutUsComponent, FaqComponent,
    ErrorComponent, ShopListComponent, SingleProductComponent, CartComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
