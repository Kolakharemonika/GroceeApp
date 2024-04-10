import { Component } from '@angular/core';
import { Cache } from 'src/shared/services/cache';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
})

export class HeaderComponent {
  public appPages = [
    { title: 'Home', url: '/Home', icon: 'home', isShow: true },
    { title: 'Categories', url: '/Category', icon: 'list', isShow: true },
    { title: 'Shop List', url: '/Shoplist', icon: 'grid', isShow: true },
    // { title: 'Product Info', url: '/Product', icon: 'pricetag' },
    { title: 'Wish List', url: '/Wishlist', icon: 'bookmarks', isShow: true },
    { title: 'Shopping Cart', url: '/Cart', icon: 'cart', isShow: true },
    { title: 'Checkout', url: '/Checkout', icon: 'card', isShow: true },
    { title: 'My Profile', url: '/Profile', icon: 'person', isShow: true },
    { title: 'My Address', url: '/Address', icon: 'location', isShow: this.cache.isLoggedIn },
    { title: 'Order List', url: '/Orders', icon: 'create', isShow: this.cache.isLoggedIn },
    { title: 'About Us', url: '/About-Us', icon: 'heart', isShow: true },
    { title: 'Contact Us', url: '/Contact-Us', icon: 'mail', isShow: true },
    { title: 'FAQ', url: '/Faq', icon: 'help', isShow: true },
    { title: '404 Not Found', url: '/Error', icon: 'sad', isShow: true },

  ];

  constructor(public cache: Cache) {}
}
