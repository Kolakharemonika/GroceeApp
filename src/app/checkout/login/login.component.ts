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
  }
  // get form() { return this.loginFormGroup.controls; }

  createSignupForm() {
    this.signupFormGroup = this.fb.group({
      mobileNo: ['', [Validators.required]], //, CustomValidators.mobileValidator
      referralCode: [''],
    });
  }

  registerMe() {
    if (this.signupFormGroup.invalid) {
      this.signupFormGroup.markAllAsTouched();
      return;
    }
    let data = this.signupFormGroup.getRawValue();
    console.log(data);

    this.customerService.startJourney(data).then((resp: any) => {
      this.router.navigate(['Checkout', 'DeliveryAddress'])
      // this.sendOrder();
    }, (error:any) => {
    });
  }

  // ionViewWillLeave() {
  //   this.customerService.leftSectionSrc = '';
  //   this.customerService.leftSectionTitle = '';
  // }
  // sendOrder() {
  //   this.customerService.addToOrder().then((resp: any) => {
  //     this.router.navigate(["order", "view"]);
  //   }, error => {
  //     this.toast.show(error);
  //     this.router.navigate(["order", "cart"]);
  //   });
  // }
}
