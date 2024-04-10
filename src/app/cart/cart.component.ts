import { Component } from '@angular/core';
import { CartService } from '../services/cart-service';
import { ApiService } from '../../shared/services/api-service';
import { Cache } from '../../shared/services/cache';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html'
})

export class CartComponent {
  itemsList: any = [];

  constructor(public cartService: CartService,
              private apiService: ApiService,
              private cache: Cache,
              private router: Router,
              public alertCtrl: AlertController,
              public actionsheetCtrl: ActionSheetController) {

                this.apiService.currentAction.subscribe((resp) => {
                  if (resp.action === 'cartlist_updated') {
                    this.getCartItemData();
                  }
                });
                this.getCartItemData();
  }

  getCartItemData() {
    this.itemsList = this.cartService.getCartItems();
    this.cartService.getCartOrder();
  }

  async confirmationAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Do you really want to Confirm order?',
      buttons: [
        {
          text: 'Confirm',
          handler: data => {
            this.router.navigate(['/Checkout','Payment']);
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

   orderConfirm() {
    if (this.cache.isLoggedIn) {
      this.confirmationAlert();
    } else {
      this.openModel();
      // this.router.navigate(['/sign-in']);
    }
  }

  async openModel() {
  const actionSheet = await this.actionsheetCtrl.create({
    // header: 'select',
    buttons: [
      {
        text: 'Sign-In',
        handler: () => {
          this.router.navigate(['/Create-user'], { queryParams: { type: 'exiting-user' } });
        }
      }, {
        text: 'Create new Account',
        handler: () => {
          this.router.navigate(['/log-details']);
        }
      }
    ]
  });
  await actionSheet.present();
}
}
