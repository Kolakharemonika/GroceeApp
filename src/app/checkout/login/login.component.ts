import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer-service';
import { Cache } from '../../../shared/services/cache';
import { AlertController } from '@ionic/angular';

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
    public cache: Cache,
    // public userService: UserService,
    // public toast: ToastService,
    // public loader: LoaderService,
    public alertCtrl: AlertController,
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
    this.cache.user.mobileNo = data.mobileNo;
    this.cache.isLoggedIn = true;
    this.cache.setSession('isLoggedIn',true)
    this.cache.saveUser();
    if (this.isAddressAvail) {
      console.log(this.cache, this.cache.isLoggedIn);

      this.confirmationAlert();
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
    // console.log(this.cache.user);
    this.customerService.addToOrder().then((resp: any) => {
      this.router.navigate(['Checkout', 'Payment'])
    }, error => {
      // this.toast.show(error);
      this.router.navigate(["Cart"]);
    });
  }

  async confirmationAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Do you really want to Confirm order?',
      buttons: [
        {
          text: 'Confirm',
          handler: data => {
            this.sendOrder();
            console.log('Confirm clicked');
          }
        },
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        }]
    });
    await alert.present();
    await alert.onDidDismiss();
  }
}
