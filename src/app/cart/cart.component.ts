import { Component } from '@angular/core';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html'
})

export class CartComponent {
  itemsList: any = []

  constructor(private cartService: CartService) {
    if (this.cartService.cartMenuItems) {
      this.itemsList = Object.values(this.cartService.cartMenuItems);
    } else {

    }
  }

}
