import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer-service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  signupFormGroup!: FormGroup;
  isAddressAvail: boolean = false;
  addressList: any;

  constructor(public fb: FormBuilder,
    public router: Router,
    // public cache: Cache,
    // public userService: UserService,
    // public toast: ToastService,
    // public loader: LoaderService,
    // public cartService: CartService,
    public customerService: CustomerService,

  ) {

    this.createSignupForm();

    this.customerService.getAddress().then((resp: any) => {
    if (resp && resp.length > 0){
       this.addressList = resp;
       this.isAddressAvail = true;
    }
    }, (error: any) => {
    });
  }

  createSignupForm() {
    this.signupFormGroup = this.fb.group({
      mobileNo: ['', [Validators.required]],
      referralCode: [''],
      deliveryAddress:['']
    });
  }

  registerMe() {
    if (this.signupFormGroup.invalid) {
      this.signupFormGroup.markAllAsTouched();
      return;
    }
    let data = this.signupFormGroup.getRawValue();
    console.log(data);


    // this.customerService.startJourney(data).then((resp: any) => {
    //   this.router.navigate(['Checkout', 'DeliveryAddress'])
    if (this.isAddressAvail) {
      this.sendOrder();
    } else {
      this.router.navigate(['Checkout','DeliveryAddress'])
    }
      // this.sendOrder();
    // }, (error:any) => {
    // });
  }

  // ionViewWillLeave() {
  //   this.customerService.leftSectionSrc = '';
  //   this.customerService.leftSectionTitle = '';
  // }

  sendOrder() {
    // this.customerService.addToOrder().then((resp: any) => {
      this.router.navigate(['Checkout', 'Payment'])
    // }, error => {
    //   // this.toast.show(error);
    //   this.router.navigate(["Cart"]);
    // });
  }
}
