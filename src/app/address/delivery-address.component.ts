import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delivery-address',
  template: `
<ion-header class="header">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button defaultHref="/home" (click)="goto()"></ion-back-button>
     <!-- <ion-button size="large">
         <ion-icon name="arrow-back-sharp"></ion-icon>
      </ion-button> -->
    </ion-buttons>
    <ion-title>Delivery Address</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content color="light">
  <form class="ion-padding" >
    <ion-list  class="card">
      <ion-item>
        <ion-label position="stacked">Name <ion-text color="danger">*</ion-text></ion-label>
        <ion-input type="text" placeholder="Enter Name"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Flat/House/Office No. <ion-text color="danger">*</ion-text></ion-label>
        <ion-input type="text" placeholder="Enter Flat/House/Office..."></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Street/Society/Office Name <ion-text color="danger">*</ion-text></ion-label>
        <ion-input placeholder="Enter Street/Society/Office..."></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Locality <ion-text color="danger">*</ion-text></ion-label>
        <ion-input placeholder="Enter Locality"></ion-input>
      </ion-item>
      <ion-list>
        <ion-radio-group>
        <ion-list-header class="mk"> Nickname of your address </ion-list-header>
          <ion-item>
            <ion-radio value="home">Home</ion-radio><br />
          </ion-item>
          <ion-item>
            <ion-radio value="office">Office</ion-radio><br />
          </ion-item>
          <ion-item>
            <ion-radio value="others">Others</ion-radio><br />
          </ion-item>
        </ion-radio-group>
      </ion-list>
      <ion-button class="ion-padding" size="small" expand="block">SAVE</ion-button>
    </ion-list>
  </form>
</ion-content>


  `
})

export class DeliveryAddressComponent {

  constructor(private router: Router) { }
  goto(){
    this.router.navigate(['/Checkout']);
  }
}
