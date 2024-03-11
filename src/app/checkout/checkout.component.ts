
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  template: `<ion-tabs>
  <ion-tab-bar slot="bottom" color="darkblue">
    <ion-tab-button layout="icon-top" tab="DeliveryAddress">
      <ion-icon name="person-circle-outline"></ion-icon>
      Address
    </ion-tab-button>
    <ion-tab-button layout="icon-top" tab="Payment">
      <ion-icon name="navigate-circle-outline"></ion-icon>
      Payment
    </ion-tab-button>
    <ion-tab-button layout="icon-top" tab="Completed">
      <ion-icon name="checkmark-circle-outline"></ion-icon>
      Complete
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
`
})

export class CheckoutComponent {
  showTab:number = 0;

  constructor(private router: Router,) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.urlAfterRedirects, 'event.urlAfterRedirects');
         if (event.urlAfterRedirects.indexOf("/Checkout/") == -1) {
          this.showTab = 1;
        } else {
          console.log('2222');
          this.showTab = 2;
        }
      }
    });
  }

}
