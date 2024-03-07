import { Component } from '@angular/core';
import { CartService } from '../services/cart-service';
import { ApiService } from '../shared/services/api-service';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html'
})

export class CartComponent {
  itemsList: any = []

  constructor(public cartService: CartService,
    private apiService: ApiService) {
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
}
