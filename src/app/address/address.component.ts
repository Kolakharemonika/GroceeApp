import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer-service';


@Component({
  selector: 'app-address',
  templateUrl: 'address.component.html'
})

export class AddressComponent {
  addressList: any;

  constructor(public fb: FormBuilder,
    private router: Router,
    private customerService: CustomerService) {
    this.getAddress();
   }

  getAddress() {

    this.customerService.getAddress().then((resp: any) => {
      console.log(resp);
      this.addressList = resp;
      // this.router.navigate(['Checkout', 'Payment'])
    }, (error: any) => {
    });
  }

  editAddress(addressId:any){
    this.router.navigate(['/DeliveryAddress'], { queryParams: { addressId } });
  }

  deleteAddress(addressId:number) {
    // this.router.navigate(['/Shoplist'], { queryParams: { category } });
    this.customerService.deleteAddress(addressId).then((resp: any) => {
      console.log(resp);
      // this.addressList = resp;
      // this.router.navigate(['Checkout', 'Payment'])
      // this.sendOrder();
    }, (error: any) => {
    });

  }

}
