import { Component } from '@angular/core';


@Component({
  selector: 'app-payment',
  template: `
   <ion-header class="header">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button defaultHref="/Checkout"></ion-back-button>
      <!-- <ion-button size="large">
         <ion-icon name="arrow-back-sharp"></ion-icon>
      </ion-button> -->
    </ion-buttons>
    <ion-title> Payment </ion-title>
  </ion-toolbar>
</ion-header>`
})

export class PaymentComponent {

  constructor() { }

}
