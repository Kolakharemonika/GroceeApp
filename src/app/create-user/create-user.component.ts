import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cache } from '../shared/services/cache';
import { CustomerService } from '../services/customer-service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html'
})

export class CreateUserComponent {
  profileFormGroup!: FormGroup;
  loginType: string = 'new-user';

  constructor(private fb: FormBuilder,
    private cache: Cache,
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute,
    private alertCtrl: AlertController) {

    this.createSignupForm();

    this.route.queryParams.subscribe(params => {

      if (params['type']) {
        this.loginType = params['type'];
      }
    });

  }
  createSignupForm() {
    this.profileFormGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      password2: [''],//loginType === 'new-user'
    });
  }


  saveProfileInfo() {
    // loginType
    if (this.profileFormGroup.invalid) {
      this.profileFormGroup.markAllAsTouched();
      return;
    }
    let profileData = this.profileFormGroup.getRawValue();
    console.log(profileData);

    // this.customerService.SaveSignIn(profileData,loginType).then((resp: any) => {
    //   console.log(resp);
      let resp = true;
      if (resp) {
        this.cache.user.username = profileData.username;
        this.cache.saveUser();

        this.cache.isLoggedIn = true;
        this.cache.setSession('isLoggedIn', true);
        if (this.loginType === 'new-user') {

          this.router.navigate(['/DeliveryAddress']);
        } else if (this.loginType === 'exiting-user') {
          this.confirmationAlert();
        } else if (this.loginType === 'forgot-username') {
          //pass share on mail id
          this.router.navigate(['/Home']);
        }
      }
    // }, (error: any) => {
    // });
  }

  async confirmationAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Do you really want to Confirm order?',
      buttons: [
        {
          text: 'Confirm',
          handler: data => {
            this.router.navigate(['/Checkout', 'Payment']);
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
