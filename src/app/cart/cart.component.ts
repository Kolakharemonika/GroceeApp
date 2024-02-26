import { Component } from '@angular/core';
import { ItemsService } from '../services/Items-service';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html'
})

export class CartComponent {
  itemsList: any = []

  constructor(private itemsService: ItemsService) {
    this.itemsService.getItems().then(resp => {
    if (resp)   {
      this.itemsList = this.itemsService.itemsList ;;
    }
    });
  }

}
