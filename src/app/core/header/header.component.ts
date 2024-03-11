import { Component } from '@angular/core';
import { Cache } from 'src/app/shared/services/cache';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
})

export class HeaderComponent {
  public appPages = [
    { title: 'Homepage', url: '/Home', icon: 'home' },
    { title: 'Categories', url: '/Category', icon: 'list' },
    { title: 'Shop List', url: '/Shoplist', icon: 'grid' },
    // { title: 'Product Info', url: '/Product', icon: 'pricetag' },
    { title: 'Wish List', url: '/Wishlist', icon: 'bookmarks' },
    { title: 'Shopping Cart', url: '/Cart', icon: 'cart' },
    { title: 'Checkout', url: '/Checkout', icon: 'card' },
    { title: 'My Profile', url: '/Profile', icon: 'person' },
    { title: 'My Address', url: '/Address', icon: 'location' },
    { title: 'Order List', url: '/Orders', icon: 'create' },
    { title: 'About Us', url: '/About-Us', icon: 'heart' },
    { title: 'Contact Us', url: '/Contact-Us', icon: 'mail' },
    { title: 'FAQ', url: '/Faq', icon: 'help' },
    { title: '404 Not Found', url: '/Error', icon: 'sad' },

  ];

  constructor(public cache: Cache) {}
}
