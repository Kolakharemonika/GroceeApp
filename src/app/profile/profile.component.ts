import { Component } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html'
})

export class ProfileComponent {
  public linkList = [
    { title: 'Profile', url: '/Profile', icon: 'person-outline' },
    { title: 'Address', url: '/Address', icon: 'location-outline' },
    { title: 'Wish List', url: '/Shoplist', icon: 'heart-outline' },
    { title: 'Order List', url: '/Product', icon: 'list-outline' },
    { title: 'My Wallet', url: '/Cart', icon: 'wallet-outline' },
    ];
  constructor() { }

}
