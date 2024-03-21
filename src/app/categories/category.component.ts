import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { ItemsService } from '../services/Items-service';

register();

@Component({
  selector: 'app-category',
  templateUrl: 'category.component.html',
})

export class CategoryComponent {
  categories: any = [];

  constructor( public router: Router,
               private itemsService: ItemsService) {
    this.itemsService.getCategory().then((data:any) => {
      this.categories = data;
    });
   }

  StartWithCat(category: string) {
    this.router.navigate(['/Shoplist'], { queryParams: { category } });
  }
}
