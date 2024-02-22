import { Injectable } from '@angular/core';

@Injectable()
export class ItemsService {
  itemsList: any = [{
    discount: '50%',
    avatar: 'assets/images/product1.jpg',
    title: 'Surf Excel Matic Top Load Detergent Powder(Carton)',
    price: '800.99',
    discountedPrice: '600.99',
    quantity: '2 kg'
  },
  {
    discount: '50%',
    avatar: 'assets/images/product1.jpg',
    title: 'Surf Excel Matic Top Load Detergent Powder(Carton)',
    price: '800.99',
    discountedPrice: '600.99',
    quantity: '2 kg'
  },
  {
    discount: '60%',
    avatar: 'assets/images/product1.jpg',
    title: 'Surf Excel Matic Top Load Detergent Powder(Carton)',
    price: '800.99',
    discountedPrice: '600.99',
    quantity: '2 kg'
  },
  {
    discount: null,
    avatar: 'assets/images/product1.jpg',
    title: 'Surf Excel Matic Top Load Detergent Powder(Carton)',
    price: '800.99',
    discountedPrice: '600.99',
    quantity: '2 kg'
  }];
  
  categoriesList: any[] = [{
    id: 'cat1',
    avatar: 'assets/images/product22.jpg',
    name: 'Grocery & Staples',
    note: 'Up to 71% OFF',
    description: 'Pulses, Atta & Other Flours, Rice & Other Grains, Dry Fruits & Nuts, Edible Oils, Ghee & Vanaspati, Spices, Salt & Sugar, Organic Staples'

  },
  {
    id: 'cat2',
    avatar: 'assets/images/product22.jpg',
    name: 'Vegetables & Fruits',
    note: 'Up to 25% OFF',
    description: 'Vegetables, Mangoes, Fruits'

  },
  {
    id: 'cat3',
    avatar: 'assets/images/product22.jpg',
    name: 'Personal Care',
    note: 'Up to 65% OFF',
    description: "Personal Care Best offers, Safety Must Haves, Bath & Body, Hair Care, Skin Care, Oral Care, Fragrances, Face Care, Feminine Hygiene, Men's Grooming, Health And Wellness, Cosmetics "
  },
  {
    id: 'cat4',
    avatar: 'assets/images/product22.jpg',
    name: 'Personal Care',
    note: 'Up to 65% OFF',
    description: "Pulses, Atta & Other Flours, Rice & Other Grains, Dry Fruits & Nuts, Edible Oils, Ghee & Vanaspati, Spices, Salt & Sugar, Organic Staples"
  },
  {
    id: 'cat5',
    avatar: 'assets/images/product22.jpg',
    name: 'Personal Care',
    note: 'Up to 65% OFF',
    description: "Biscuits, Atta & Other Flours, Rice & Other Grains, Dry Fruits & Nuts, Edible Oils, Ghee & Vanaspati, Spices, Salt & Sugar, Organic Staples"
  }];

  constructor() { }

  getItems(){
    return this.itemsList.slice();
  }
  getCategories() {
    return this.categoriesList.slice();
  }

}
