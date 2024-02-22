import { Component } from '@angular/core';


@Component({
  selector: 'app-terms',
  template: `
   <ion-header class="header">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button defaultHref="/About-Us" size="large"></ion-back-button>
    </ion-buttons>
    <ion-title> Terms & conditions </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-grid>
    <ion-row>
      <h1>Osahanin <span>Terms & conditions</span></h1>
     <h5> Effective date: 1 January 2020</h5>
    </ion-row>

<ion-row>

  <ion-text>
    Thanks for using our products and services ("Services"). The Services are provided by Pixeel Ltd. ("Osahanin"), located at 153 Williamson Plaza, Maggieberg, MT 09514, England, United Kingdom.

    By using our Services, you are agreeing to these terms. Please read them carefully.
  </ion-text>
</ion-row>

  </ion-grid>


</ion-content>
  `
})

export class TermsConditionComponent {

  constructor() { }

}
