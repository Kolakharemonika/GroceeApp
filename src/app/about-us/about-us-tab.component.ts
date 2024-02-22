import { Component } from '@angular/core';


@Component({
  selector: 'app-about-us-tab',
  template: `
   <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button layout="icon-top" tab="Privacy" routerdirection="forward">
          <ion-icon name="lock-closed"></ion-icon>
          <ion-label>Privacy & Policy</ion-label>
        </ion-tab-button>
        <ion-tab-button layout="icon-top" tab="Terms" routerdirection="forward">
          <ion-icon name="folder"></ion-icon>
          <ion-label>Terms & conditions</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
    `
})

export class AboutUsTabComponent {

  constructor() { }

}
