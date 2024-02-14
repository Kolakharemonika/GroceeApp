import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";

import { PaymentComponent } from './payment.component';
import { CompletedComponent } from './completed.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
// import { CheckoutRoutingModule } from "./checkout-routing.component";

@NgModule({
  declarations: [PaymentComponent, CompletedComponent, LoginComponent],
  imports: [IonicModule,
    CommonModule,
    FormsModule,
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CheckoutModule { }
