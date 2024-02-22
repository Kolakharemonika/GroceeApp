import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { ItemsService } from '../shared/services/Items-service';

register();

@Component({
  selector: 'app-category',
  templateUrl: 'category.component.html',
})

export class CategoryComponent {
  categories: any = [];

  constructor( public router: Router,
               private itemsService: ItemsService) {
    this.categories = this.itemsService.getCategories();
   }


  StartWithCat(type: string) {
    this.router.navigate(['/Shoplist'], { queryParams: { type } });
  }
}
