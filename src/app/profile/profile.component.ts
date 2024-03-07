
import { Camera, CameraDirection, CameraResultType, CameraSource } from '@capacitor/camera';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cache } from '../shared/services/cache';

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
              public cache: Cache) {
    this.createSignupForm();
    this.getProfileInfo();
    console.log(this.cache.user);

   }

  async uploadImage() {
    console.log('Take a photo');
    // const mk = await Camera.checkPermissions()
    // console.log(mk, 'mk');
    try {
      await Camera.getPhoto({
       resultType: CameraResultType.DataUrl,
       source: CameraSource.Prompt,
        // PermissionState: PermissionState.Prompt,
       // direction: CameraDirection.Front,
       correctOrientation: true,
       quality: 100
      }).then((image) => {
      // waat? cancelling the dialog makes the same image upload twice / as many times as the dialog has been cancelled
      //  console.log('now upload picture', image);
      // this.uploadBase64("data:image/jpeg;base64, " + image.base64String); // new function
        this.profileFormGroup.get('avatar')?.patchValue(image.dataUrl);
     })
    } catch(error) {
    console.log("error: ", error);
  }


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
    this.profileFormGroup = this.fb.group({
      avatar: [''],
      name:[''],
      email: ['']
    });
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

    // document.querySelector("#image").src = imageUrl;
    if(!this.cache?.user) {
       this.isEditProfile = true;
    } else {
       this.isEditProfile = false;
    }
    this.profileFormGroup.patchValue(this.cache.user);
      // }
    // }, (error: any) => {
    // });
  }

}
