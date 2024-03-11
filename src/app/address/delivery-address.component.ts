import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../services/customer-service';


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
  <form class="ion-padding" [formGroup]="addressFormGroup" >
    <ion-list class="card">
      <ion-item>
        <ion-label position="stacked">Name <ion-text color="danger">&nbsp;*</ion-text></ion-label>
        <ion-input formControlName="name" type="text" placeholder="Enter Name"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Flat/House/Office No. <ion-text color="danger">&nbsp;*</ion-text></ion-label>
        <ion-input formControlName="addressNo" type="text" placeholder="Enter Flat/House/Office..."></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Street/Society/Office Name <ion-text color="danger">&nbsp;*</ion-text></ion-label>
        <ion-input formControlName="addressName" placeholder="Enter Street/Society/Office..."></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Locality <ion-text color="danger">&nbsp;*</ion-text></ion-label>
        <ion-input formControlName="addressLocality" placeholder="Enter Locality"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Mobile No. <ion-text color="danger">&nbsp;*</ion-text></ion-label>
        <ion-input formControlName="mobileNo" type="text" placeholder="Mobile No"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Alternate Mobile No.</ion-label>
        <ion-input formControlName="altMobile" type="text" placeholder="Alternate Mobile No"></ion-input>
      </ion-item>

      <ion-list>
        <ion-radio-group formControlName="addressOf">
        <ion-list-header class="address-header"> Select Address Type </ion-list-header>
          <ion-item>
            <ion-radio value="Home">Home</ion-radio><br />
          </ion-item>
          <ion-item>
            <ion-radio value="Office">Office</ion-radio><br />
          </ion-item>
          <ion-item>
            <ion-radio value="Others">Others</ion-radio><br />
          </ion-item>
        </ion-radio-group>
      </ion-list>
      <!-- <ion-item class="ion-padding-vertical" lines="none">
            <ion-button [disabled]="addressFormGroup.invalid" strong="true" size="medium" (click)="saveAddress()"> Save  </ion-button>
            <ion-button slot="end" fill="outline" size="medium" strong="true" (click)="skip()"> Skip </ion-button>
      </ion-item> -->
      <ion-button class="ion-padding" size="small" expand="block" (click)="saveAddress()">SAVE</ion-button>
    </ion-list>
  </form>
</ion-content>


  `
})

export class DeliveryAddressComponent {
  addressFormGroup!: FormGroup;
  addressId: number =  0;

  constructor(public fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private customerService: CustomerService) {

                this.createAddressForm();

    this.route.queryParams.subscribe(params => {

      if (params['addressId']) {
        this.addressId = params['addressId'];
        this.addressId && this.getAddressData(this.addressId);
      }
    });
  }

  createAddressForm() {
    this.addressFormGroup = this.fb.group({
      name: ['', [Validators.required]],
      addressNo: ['', [Validators.required]], //, CustomValidators.mobileValidator
      addressName: ['', [Validators.required]],
      addressLocality: ['', [Validators.required]],
      addressOf: ['home'],
      mobileNo:[''],
      altMobile:['']
    });
  }

  goto() {
    this.router.navigate(['/Checkout']);
  }

  skip() {

  }

  getAddressData(addressId:number) {
    this.customerService.getAddress().then((addressList: any) => {
      let selectedAddress= addressList.filter((ad:any)=>ad.id == addressId)[0];
      console.log(addressList);
      console.log(selectedAddress);
      this.addressFormGroup.patchValue(selectedAddress);
    }, (error: any) => {
    });
  }
  saveAddress() {
    if (this.addressFormGroup.invalid) {
      this.addressFormGroup.markAllAsTouched();
      return;
    }
    let data = this.addressFormGroup.getRawValue();
    console.log(data);
    if (this.addressId) { //update -edit address
      this.customerService.saveAddress(data).then((resp: any) => {
        // this.router.navigate(['Checkout', 'Payment'])
        // this.sendOrder();
      }, (error: any) => {
      });
    } else { //new address
      this.customerService.saveAddress(data).then((resp: any) => {
        // this.router.navigate(['Checkout', 'Payment'])
        // this.sendOrder();
      }, (error: any) => {
      });
    }
  }
}
