import { Component } from '@angular/core';
import { ItemsService } from '../services/Items-service';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})

export class HomeComponent {
  itemsList: any = [];

  constructor(private itemsService: ItemsService ,
    public cartService: CartService ) {

    this.itemsService.getItems().then((resp: any) => {
      if (resp) {
        this.itemsList = this.itemsService.itemsList.slice(0, 4); //only 4 items needed
      }
    });
  }

}
