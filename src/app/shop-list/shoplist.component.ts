import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-shoplist',
  templateUrl: 'shoplist.component.html'
})

export class ShopListComponent {
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
    price: '$600.99',
    discountedPrice: '$800.99',
    quantity: '2 kg'
  },
  {
    discount: '60% OFF',
    img: 'assets/images/product1.jpg',
    title: 'Surf Excel Matic Top Load Detergent Powder(Carton)',
    price: '$600.99',
    discountedPrice: '$800.99',
    quantity: '2 kg'
  },
  {
    discount: null,
    img: 'assets/images/product1.jpg',
    title: 'Surf Excel Matic Top Load Detergent Powder(Carton)',
    price: '$600.99',
    discountedPrice: '$800.99',
    quantity: '2 kg'
  }]
  selectedType:any;
  date:any;
  constructor(private route: ActivatedRoute,) {
    this.route.queryParams.subscribe(params => {

      if (params['type']) {
        this.selectedType = params['type'];
      }
    });
    this.date=new Date();
  }
}
