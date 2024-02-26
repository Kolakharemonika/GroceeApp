import { Component } from '@angular/core';
import { ItemsService } from '../services/Items-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})

export class HomeComponent {
  itemsList: any = [];

  constructor(private itemsService: ItemsService ) {

    this.itemsService.getItems().then((resp: any) => {
      if (resp) {
          this.itemsList = this.itemsService.itemsList;
      }
    });
  }

}
