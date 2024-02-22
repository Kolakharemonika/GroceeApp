import { Component } from '@angular/core';


@Component({
  selector: 'app-orders-list',
  templateUrl: 'orders.component.html'
})

export class OrdersListComponent {
  itemList: any = [{
    deliveryCharge: '',
    img: 'assets/images/product1.jpg',
    title: 'Surf Excel Matic',
    amount: '800.99',
    finalAmount: '600.99',
    status: 'cancel',
  },
  {
    deliveryCharge: '520,00',
    img: 'assets/images/product1.jpg',
    title: 'Surf Excel Matic',
    amount: '600.99',
    finalAmount: '800.99',
    status: 'success'
  },
  {
    deliveryCharge: '',
    img: 'assets/images/product1.jpg',
    title: 'Surf Excel Matic',
    amount: '600.99',
    finalAmount: '800.99',
    status: 'cancel'
  },]
  constructor() { }

}
