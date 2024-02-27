import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './shared/services/token-interceptor';

import { AppRoutingModule } from './app-routing.module';
import { CheckoutModule } from './checkout/checkout.module';

import { CartService } from './services/cart-service';
import { ItemsService } from './services/Items-service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './categories/category.component';
import { ShopListComponent } from './shop-list/shoplist.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { AddressComponent } from './address/address.component';
import { ContactComponent } from './contact-us/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { OrdersListComponent } from './order-list/orders.component';
import { CartComponent } from './cart/cart.component';
import { ErrorComponent } from './error/error.component';
import { DeliveryAddressComponent } from './address/delivery-address.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutUsTabComponent } from './about-us/about-us-tab.component';
import { PrivacyComponent } from './about-us/privacy.component';
import { TermsConditionComponent } from './about-us/terms.component';
import { SingleCardComponent } from './shared/components/single-card/single-card.component';
import { WishListComponent } from './wish-list/wishlist.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, CategoryComponent,
                 OrdersListComponent, AddressComponent, ContactComponent, ProfileComponent,
                 CheckoutComponent, AboutUsComponent, FaqComponent, ErrorComponent,
                 ShopListComponent, SingleProductComponent, CartComponent, DeliveryAddressComponent,
                 AboutUsTabComponent, PrivacyComponent, TermsConditionComponent, SingleCardComponent,
                 WishListComponent ],
  imports: [BrowserModule, CheckoutModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CartService, ItemsService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {}
