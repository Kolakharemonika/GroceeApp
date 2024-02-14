
import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  template: `
  
  <ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="Address">
      <ion-icon name="person-circle-outline"></ion-icon>
      Address
    </ion-tab-button>
    <ion-tab-button tab="Payment">
      <ion-icon name="navigate-circle-outline"></ion-icon>
      Payment
    </ion-tab-button>
    <ion-tab-button tab="Completed">
      <ion-icon name="checkmark-circle-outline"></ion-icon>
      Complete
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>`
})

export class CheckoutComponent {

  constructor() { }

}
