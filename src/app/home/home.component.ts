import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})

export class HomeComponent {
  itemList:any = [{
    discount: '50% OFF',
    img: 'assets/images/product1.jpg',
    title: 'Surf Excel Matic Top Load Detergent Powder(Carton)',
    price: '$600.99',
    discountedPrice: '$800.99',
    quantity:'2kg'
  },
   {
      discount: '50% OFF',
      img: 'assets/images/product1.jpg',
      title: 'Surf Excel Matic Top Load Detergent Powder(Carton)',
      price: '$600.99',
      discountedPrice: '$800.99',
      quantity: '2kg'
    },
    {
      discount: '60% OFF',
      img: 'assets/images/product1.jpg',
      title: 'Surf Excel Matic Top Load Detergent Powder(Carton)',
      price: '$600.99',
      discountedPrice: '$800.99',
      quantity: '2kg'
    },
    {
      discount: null,
      img: 'assets/images/product1.jpg',
      title: 'Surf Excel Matic Top Load Detergent Powder(Carton)',
      price: '$600.99',
      discountedPrice: '$800.99',
      quantity: '2kg'
    }]
  constructor( ) {  }


}
