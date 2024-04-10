import { Component } from '@angular/core';
import { CartService } from '../services/cart-service';
import { ApiService } from '../../shared/services/api-service';


@Component({
  selector: 'app-wishlist',
  templateUrl: 'wishlist.component.html'
})

export class WishListComponent {
  wishListItems: any = []

  constructor( public cartService: CartService,
               private apiService: ApiService ) {

    this.apiService.currentAction.subscribe((resp) => {
      if (resp.action === 'wishlist_updated') {
        this.getWishlistData();
      }
    });

    this.getWishlistData();
  }

  getWishlistData(){
    this.wishListItems = this.cartService.getWishlistItems();
  }
}
