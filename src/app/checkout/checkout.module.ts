import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PaymentComponent } from './payment.component';
import { CompletedComponent } from './completed.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [PaymentComponent, CompletedComponent, LoginComponent],
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CheckoutModule { }
