import { Injectable } from '@angular/core';
import { MenuItem } from 'src/app/models/application';

@Injectable()
export class CartService {
  cartMenuItems: Record<number, MenuItem> = {};
  order: any;
  isCartItemsEdited: boolean = false;

  constructor() {}

  updateCartMenuItemsQty(menu: any, action: string) {
    let id = menu.id;

    if (action === 'add') {
      if (this.cartMenuItems[id]) {
        this.cartMenuItems[id].quantity++;
      } else {
        this.cartMenuItems[id] = Object.assign({}, menu);
        this.cartMenuItems[id].quantity = 1;
      }
    } else {
      if (this.cartMenuItems[id]) {
        this.cartMenuItems[id].quantity--;
      }
      if (this.cartMenuItems[id]?.quantity <= 0) {
        delete this.cartMenuItems[id];
      }
    }
    this.saveCart();
    this.isCartItemsEdited = true;
  }

  removeCartMenuItem(menuId:any) {
    if (menuId && this.cartMenuItems[menuId]) {
      delete this.cartMenuItems[menuId];
      // this.cache.clearSession('cart');
      // this.apiService.sendAction({ action: 'cart_updated' });
    }
  }

  getCartItems() {
    return Object.values(this.cartMenuItems);
  }

  getTotalQty() {
    let total = Object.values(this.cartMenuItems).reduce((acc: number, item: any) => {
      return acc += item.quantity;
    }, 0);

    return total;
  }
  getTotalOrderItemsCount() {
    return Object.keys(this.cartMenuItems).length;
  }

  emptyCart() {
    this.cartMenuItems = {};
    // this.cache.clearSession('cart');
    // this.apiService.sendAction({ action: 'cart_updated' })
  }
  saveCart() {
    // this.cache.setSession('cart', this.cartMenuItems);
    // this.apiService.sendAction({ action: 'cart_updated' });
  }
  saveOrder() {
    // this.cache.setSession('order', this.order);
  }
}
