import { Component } from '@angular/core';
import { ItemsService } from '../services/Items-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})

export class HomeComponent {
  itemList: any = {}

  constructor(private itemsService: ItemsService ) {
    this.itemList = this.itemsService.getItems();
   }


}
