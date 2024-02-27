import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../services/Items-service';
import { CartService } from '../services/cart-service';
import { ApiService } from '../shared/services/api-service';


@Component({
  selector: 'app-wishlist',
  templateUrl: 'wishlist.component.html'
})

export class WishListComponent implements OnInit {
  wishListItems: any = []

  constructor( public cartService: CartService,
               private apiService: ApiService
               ) {
    this.apiService.currentAction.subscribe((resp) => {
      if (resp.action === 'wishlist_updated') {
        this.getWishlistData();
      }
    });

  }


  ngOnInit() {
    this.getWishlistData();
  }

  getWishlistData(){
    this.wishListItems = this.cartService.getWishlistItems();

  }
}
