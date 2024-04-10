import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CameraService } from '../../shared/services/camera-service';
import { Cache } from '../../shared/services/cache';
import { CustomerService } from '../services/customer-service';
import { NavigationEnd, Router } from '@angular/router';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-login-details',
  templateUrl: 'login.component.html'
})

export class LoginDetailsComponent {
  profileFormGroup!: FormGroup;

  constructor(private fb: FormBuilder,
              private cameraService: CameraService,
              private cache: Cache,
              private cartService: CartService,
              private customerService: CustomerService,
              private router: Router) {

    // console.log('payment');
    this.createSignupForm();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.urlAfterRedirects, 'event.urlAfterRedirects');

        if (event.urlAfterRedirects.indexOf("/log-details") !== -1) {

        } else if (event.urlAfterRedirects.indexOf("/Profile") !== -1) {

        }
      }
    });
  }
  createSignupForm() {
    this.profileFormGroup = this.fb.group({
      mobileNo: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.email],
      avatar: ['assets/images/profileImg.png'],
      gender: [''],
      date: [],
      // username: ['', Validators.required],
      // password: ['', Validators.required]
    });
  }


  async uploadImage() {
    console.log('Take a photo');
    await this.cameraService.uploadImage().then((image: any) => {
      // console.log(image,'image');
      this.profileFormGroup.get('avatar')?.patchValue(image);
    });
  }

  skip() {
    this.router.navigate(['/Create-user']);
  }

  saveProfileInfo() {
    if (this.profileFormGroup.invalid) {
      this.profileFormGroup.markAllAsTouched();
      return;
    }
    let profileData = this.profileFormGroup.getRawValue();
    profileData.avatar = <String>(profileData.avatar).includes('profileImg.png') ? '' : profileData.avatar;
    console.log(profileData);

    // this.customerService.SaveSignIn(profileData).then((resp: any) => {
    let resp = true;
    console.log(resp);
    if (resp) {
      this.cache.user.name = profileData.name;
      this.cache.user.mobileNo = profileData.mobileNo;
      this.cache.user.email = profileData.email ? profileData.email : '';
      // this.cache.user.username = profileData.username;
      this.cache.user.avatar = profileData.avatar ? profileData.avatar : 'assets/images/profileImg.png';
      this.cache.saveUser();

      // this.cache.isLoggedIn = true;
      // this.cache.setSession('isLoggedIn', true);
      if (this.cache.isLoggedIn) {
        this.cartService.saveOrder()
      } else {
        this.router.navigate(['/Create-user'], { queryParams: { type : 'new-user' } });
        // this.router.navigate(['/Shoplist'], { queryParams: { category } });
      }
    }
    // }, (error: any) => {
    // });
  }

}
