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
</ion-header>
<ion-content>
  <ion-card>
    <ion-list-header>select payment method</ion-list-header>
    <ion-list>
      <ion-radio-group >
        <ion-item><ion-radio value="phonepay"> Phonepay  </ion-radio></ion-item>
         <ion-item><ion-radio value="phonepay"> Phonepay  </ion-radio></ion-item>
         <ion-item><ion-radio value="phonepay"> Phonepay  </ion-radio></ion-item>
      </ion-radio-group>
    </ion-list>
</ion-card>

</ion-content>
`
})

export class PaymentComponent {

  constructor() {
    console.log('payment');

   }

}
