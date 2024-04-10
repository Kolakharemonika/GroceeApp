import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../app/services/customer-service';
import { CameraService } from '../shared/services/camera-service';
import { ToastService } from '../shared/services/toast-service';
import { ItemsService } from '../app/services/Items-service';

register();

@Component({
  selector: 'app-add-category',
  template: `
  <ion-content class="ion-padding">
  <ion-accordion-group expand="inset" value="first">
    <ion-accordion value="first">
      <ion-item slot="header" color="primary">
        <ion-label> Add new categegory details</ion-label>
      </ion-item>
      <form class="ion-padding" slot="content" [formGroup]="categoryFormGroup">
        <ion-list class="" lines="none">
          <ion-row>
            <ion-col size="4">
              <ion-img [src]="categoryFormGroup.value.avatar" alt="profile" (click)="uploadImage()"></ion-img>
            </ion-col>
          </ion-row>
          <ion-row class="ion-padding-vertical">
            <ion-input formControlName="catTitle" type="text" required label="Category Title" label-placement="floating" fill="outline" placeholder="Enter Category Title"></ion-input>
          </ion-row>
          <ion-row class="ion-padding-bottom">
            <ion-input formControlName="catDescription" type="text" required label="Category Description" label-placement="floating" fill="outline" placeholder="Enter Category Description"></ion-input>
          </ion-row>
          <ion-row class="ion-padding-bottom">
            <ion-input formControlName="catDiscount" maxlength="2" type="number" pattern="[0-9]*" label="Discount" label-placement="floating" fill="outline" placeholder="Enter Discount"></ion-input>
          </ion-row>
          <ion-item lines="none">
            <ion-button slot="end" [disabled]="categoryFormGroup.invalid" strong="true" size="medium" (click)="addCategory()"> Add new Category </ion-button>
          </ion-item>
        </ion-list>
      </form>
    </ion-accordion>
    <ion-accordion value="second">
      <ion-item slot="header" color="primary">
        <ion-label> Add new item details</ion-label>
      </ion-item>

      <form class="ion-padding" slot="content" [formGroup]="itemFormGroup">
        <ion-list>
          <ion-row>
            <ion-col size="4">
              <ion-img [src]="itemFormGroup.value.avatar" alt="profile" (click)="uploadImage()"></ion-img>
            </ion-col>
          </ion-row>
          <ion-row class="ion-padding-vertical">
            <ion-input formControlName="title" type="text" required label="Item Title" label-placement="floating" fill="outline" placeholder="Enter Item Title"></ion-input>
          </ion-row>
          <ion-row class="ion-padding-bottom">
            <ion-input formControlName="price" type="text" pattern="[0-9]*" required label="Item Price" label-placement="floating" fill="outline" placeholder="Enter Item Price"></ion-input>
          </ion-row>
          <ion-row class="ion-padding-bottom">
            <ion-input formControlName="discount" maxlength="2" type="number" pattern="[0-9]*" label="Discount" label-placement="floating" fill="outline" placeholder="Enter Discount"></ion-input>
          </ion-row>
          <ion-row class="ion-padding-bottom">
            <ion-input formControlName="measures" type="text" label="Measures" label-placement="floating" fill="outline" placeholder="Enter Item Measures"></ion-input>
          </ion-row>
            <ion-row class="ion-padding-bottom">
                <ion-select fill="outline" label="Popover" interface="popover" placeholder="Select category" aria-label="category" label="Select category" formControlName="category">
                  <ion-select-option *ngFor="let category of categoryList" value="{{category.id}}">{{category.catTitle}}</ion-select-option>
                </ion-select>
              </ion-row>
          <ion-item lines="none">
            <ion-button slot="end" [disabled]="itemFormGroup.invalid" strong="true" size="medium" (click)="addItems()"> Add new Item </ion-button>
          </ion-item>
        </ion-list>
      </form>
    </ion-accordion>
  </ion-accordion-group>
</ion-content>
  `,
})

export class AddCategoryComponent {
  categoryFormGroup!: FormGroup;
  itemFormGroup!: FormGroup;
  categoryList: any = [];

  constructor(public router: Router,
              private customerService: CustomerService,
              private cameraService: CameraService,
              private fb: FormBuilder,
              private toast: ToastService,
              private itemsService: ItemsService) {

                this.createForm();
                this.itemsService.getCategory().then((data: any) => {
                  this.categoryList = data;
                });
              }


  createForm() {
    this.categoryFormGroup = this.fb.group({
      catTitle: ['', Validators.required],
      catDescription: ['', Validators.required],
      catDiscount: [''],
      avatar: ['assets/images/profileImg.png'],
    });

    this.itemFormGroup = this.fb.group({
      title: ['', Validators.required],
      discount: [''],
      price: ['', Validators.required],
      measures: ['', Validators.required],
      category: ['', Validators.required],
      avatar: ['assets/images/profileImg.png'],
    })
  }

  addCategory() {
    if (this.categoryFormGroup.invalid) {
      this.categoryFormGroup.markAllAsTouched();
      return;
    }

    let profileData = this.categoryFormGroup.getRawValue();

    console.log(profileData);

    this.customerService.addToCategory(profileData).then((resp: any) => {

      if(resp) {
        this.toast.showSuccess('middle','Category Added successfully!');
        this.categoryFormGroup.reset();
        this.categoryFormGroup.controls['avatar'].patchValue('assets/images/profileImg.png')
       }
    }, error => {
      this.toast.showError('top',error);
    });
  }

  addItems() {
    if (this.itemFormGroup.invalid) {
      this.itemFormGroup.markAllAsTouched();
      return;
    }

    let itemData = this.itemFormGroup.getRawValue();

    console.log(itemData);

    this.customerService.addToItemsList(itemData).then((resp: any) => {
      if (resp) {
        this.toast.showSuccess('middle','Product Added successfully!');
        this.itemFormGroup.reset();
        this.itemFormGroup.controls['avatar'].patchValue('assets/images/profileImg.png')
       }
    }, error => {
      this.toast.showError('top', error);
    });
  }

  async uploadImage() {
    console.log('Take a photo');
    await this.cameraService.uploadImage().then((image: any) => {
      // console.log(image,'image');
      this.categoryFormGroup.get('avatar')?.patchValue(image);
      this.itemFormGroup.get('avatar')?.patchValue(image);
    });
  }
}
