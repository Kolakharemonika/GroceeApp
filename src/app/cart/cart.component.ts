import { Component } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html'
})

export class CartComponent {
  itemList: any = [{
    discount: '50% OFF',
    img: 'assets/images/product1.jpg',
    title: 'Surf Excel Matic Top Load Detergent Powder(Carton)',
    price: '$800.99',
    discountedPrice: '$600.99',
    quantity: '2 kg'
  },
  {
    discount: '50% OFF',
    img: 'assets/images/product1.jpg',
    title: 'Surf Excel Matic Top Load Detergent Powder(Carton)',
    price: '$800.99',
    discountedPrice: '$600.99',
    quantity: '2 kg'
  },
  {
    discount: '60% OFF',
    img: 'assets/images/product1.jpg',
    title: 'Surf Excel Matic Top Load Detergent Powder(Carton)',
    price: '$800.99',
    discountedPrice: '$600.99',
    quantity: '2 kg'
  },
  {
    discount: null,
    img: 'assets/images/product1.jpg',
    title: 'Surf Excel Matic Top Load Detergent Powder(Carton)',
    price: '$800.99',
    discountedPrice: '$600.99',
    quantity: '2 kg'
  }]
  constructor() { }

}
