
import { Camera, CameraDirection, CameraResultType, CameraSource } from '@capacitor/camera';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cache } from '../../shared/services/cache';
import { CameraService } from '../../shared/services/camera-service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html'
})

export class ProfileComponent {
  profileFormGroup!: FormGroup;
  isEditProfile: boolean = false;
  imageURL: any;

  public linkList = [
    { title: 'Profile', url: '/Profile', icon: 'person-outline' },
    { title: 'Address', url: '/Address', icon: 'location-outline' },
    { title: 'Wish List', url: '/Wishlist', icon: 'heart-outline' },
    { title: 'Order List', url: '/Orders', icon: 'list-outline' },
    { title: 'My Wallet', url: '/Cart', icon: 'wallet-outline' },
    ];

  constructor(public fb: FormBuilder,
              public cache: Cache,
              private cameraService: CameraService) {
                 this.createSignupForm();
                 this.getProfileInfo();
                 }

  async uploadImage() {
    console.log('Take a photo');
    await this.cameraService.uploadImage().then((image: any) => {
      this.profileFormGroup.get('avatar')?.patchValue(image);
    });
  }

  editProfile() {
    this.isEditProfile = true;
  }

  saveProfileInfo() {
    if (this.profileFormGroup.invalid) {
      this.profileFormGroup.markAllAsTouched();
      return;
    }
    this.isEditProfile = false;
    let profileData = this.profileFormGroup.getRawValue();
    console.log(profileData);
    this.cache.user.name = profileData.name;
    this.cache.user.avatar = profileData.avatar;
    this.cache.user.email = profileData.email;
    this.cache.saveUser();
    console.log(this.cache.user,'this.cache.user');

  }

  deleteImage() {
    this.profileFormGroup.get('avatar')?.patchValue('assets/images/profileImg.png');
  }

  createSignupForm() {
    // this.profileFormGroup = this.fb.group({
    //   avatar: [''],
    //   name:[''],
    //   email: ['']
    // });
  }

  showPreview(event:any){ //input is file then

    const file = event.target.files[0];
    console.log(file);

    this.profileFormGroup.patchValue({ avatar: file });
    this.profileFormGroup.get('avatar')?.updateValueAndValidity()

    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
      console.log(this.imageURL);
    }
    reader.readAsDataURL(file);
  }

  getProfileInfo() {

    if (this.cache?.user && this.cache.user.avatar && this.cache.user.email) {
      this.isEditProfile = false;
      this.profileFormGroup.patchValue(this.cache.user);
    } else {
      this.isEditProfile = true;
    }
  }

}
