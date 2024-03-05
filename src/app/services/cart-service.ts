import { Injectable } from '@angular/core';
import { MenuItem } from 'src/app/models/application';
import { ItemsService } from './Items-service';
import { ApiService } from '../shared/services/api-service';

@Injectable()
export class CartService {
  cartMenuItems: Record<number, MenuItem> = {};
  wishListItems: Record<number, MenuItem> = {};
  cart: any = {};
  order: any;
  isCartItemsEdited: boolean = false;

  constructor(private itemService: ItemsService,
    private apiService: ApiService) {
    console.log(this.cartMenuItems,'cartMenuItems');

  }

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
      this.apiService.sendAction({ action: 'cartlist_updated' });
    }
    this.saveCart();
    this.isCartItemsEdited = true;
    console.log(this.cartMenuItems, 'cartMenuItems');
  }

  removeCartMenuItem(menuId:any) {
    if (menuId && this.cartMenuItems[menuId]) {
      delete this.cartMenuItems[menuId];
      // this.cache.clearSession('cart');
      // this.apiService.sendAction({ action: 'cart_updated' });
    }
  }

  updateWishlistItems(product: any) {

    let filteredProduct = this.itemService?.itemsList.length>  0 && this.itemService?.itemsList.filter((item:any)=> item.id === product.id)[0]

    if (!this.wishListItems[product.id]) {
        filteredProduct.isWishlist = true;
        this.cartMenuItems[product.id] && (this.cartMenuItems[product.id].isWishlist = true);
        this.wishListItems[product.id] = Object.assign({}, product);

      } else {
        filteredProduct.isWishlist = false;
        this.cartMenuItems[product.id] && (this.cartMenuItems[product.id].isWishlist = false);
        delete this.wishListItems[product.id];
     }
    // this.sendAction
    this.apiService.sendAction({ action: 'wishlist_updated' });
    console.log(this.wishListItems, 'wishListItems');
  }

  getWishlistItems() {
    return Object.values(this.wishListItems);
  }

  getCartOrder() {
    this.cart.price = this.getTotalQty();
    this.cart.discountedPrice = this.getTotalDisPrice();
    this.cart.discount = this.getTotalQty() - this.getTotalDisPrice();
    this.cart.deliveryCharge = this.getTotalQty() >= 500 ? 0 : this.getTotalOrderItemsCount() * 40;
    this.cart.subTotal = this.cart.discountedPrice + this.cart.deliveryCharge ;
   }
   
  getCartItems() {
    return Object.values(this.cartMenuItems);
  }

  getTotalQty() {
    let total = Object.values(this.cartMenuItems).reduce((acc: number, item: any) => {
      return acc += Number(item.price);
    }, 0);

    return total;
  }
  getTotalDisPrice() {
    let total = Object.values(this.cartMenuItems).reduce((acc: number, item: any) => {
      return acc += Number(item.discountedPrice);
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
