import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-category',
  templateUrl: 'category.component.html',
})

export class CategoryComponent {
  constructor() { }
}
