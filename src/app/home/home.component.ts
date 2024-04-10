import { Component } from '@angular/core';
import { ItemsService } from '../services/Items-service';
import { CartService } from '../services/cart-service';
import { ApiService } from '../../shared/services/api-service';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Cache } from '../../shared/services/cache';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})

export class HomeComponent {
  itemsList: any = [];
  offersList: any = [];

  constructor(private itemsService: ItemsService,
              public cartService: CartService,
              private cache: Cache,
              private actionsheetCtrl: ActionSheetController,
              private router: Router ) {
    this.getCartItemData();
    !this.cache.isLoggedIn && this.showModel();
    this.getOffers();
  }

  getCartItemData() {
    this.itemsService.getItems().then((resp: any) => {
      if (resp) {
        this.itemsList = this.itemsService.itemsList.slice(0, 4); //only 4 items needed
      }
    });
  }

  showOffers(code: string) {

  }
  getOffers() {
    // this.itemsService.offers().then((resp: any) => {
      let resp = true;
      if (resp) {
        // this.offersList = resp; //only 4 items needed
        this.offersList = [{ discount: '40', discountPrice: '800', minPrice: '5000', code:'NEW40' },
          { discount: '10', discountPrice: '500', minPrice: '5000', code: 'NEW10' }];
      }
    // });
  }

  async showModel() {
    const actionSheet = await this.actionsheetCtrl.create({
      backdropDismiss: false,
      buttons: [
         {
          text: 'Continue',
          handler: () => {
            console.log('Continue');
          },
          icon: 'arrow-forward-outline',
          htmlAttributes: {
            'aria-label': 'close',
          }
        }, {
            text: 'Sign-In',
            handler: () => {
              console.log('Sign-In');
              this.router.navigate(['/Create-user'], { queryParams: { type: 'exiting-user' } });
            },
            icon: 'lock-closed-outline',
        }, {
            text: 'Create new Account',
            icon: 'person-add-outline',
            handler: () => {
              this.router.navigate(['/log-details']);
            }
        }, {
            text: 'Admin',
            icon: 'person-outline',
            handler: () => {
              this.router.navigate(['/Create-user'], { queryParams: { type: 'exiting-user' } });
            }
        }
      ]
    });
    await actionSheet.present();
  }
}
