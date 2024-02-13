import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-category',
  templateUrl: 'category.component.html',
})

export class CategoryComponent {
  categories:any[]=[{
    id:'cat1',
    avatar:'assets/images/product22.jpg',
 name:'Grocery & Staples',
 discount:'Up to 71% OFF',
 description:'Pulses, Atta & Other Flours, Rice & Other Grains, Dry Fruits & Nuts, Edible Oils, Ghee & Vanaspati, Spices, Salt & Sugar, Organic Staples'

  },
    {
      id: 'cat2',
      avatar: 'assets/images/product22.jpg',
      name: 'Grocery & Staples',
      discount: 'Up to 71% OFF',
      description: 'Pulses, Atta & Other Flours, Rice & Other Grains, Dry Fruits & Nuts, Edible Oils, Ghee & Vanaspati, Spices, Salt & Sugar, Organic Staples'

    },
    {
      id: 'cat3',
      avatar: 'assets/images/product22.jpg',
      name: 'Grocery & Staples',
      discount: 'Up to 71% OFF',
      description: 'Pulses, Atta & Other Flours, Rice & Other Grains, Dry Fruits & Nuts, Edible Oils, Ghee & Vanaspati, Spices, Salt & Sugar, Organic Staples'

    }]
  constructor(public router: Router) { }


  StartWithCat(type: string) {
    this.router.navigate(['/Shoplist'], { queryParams: { type } });
  }
}
