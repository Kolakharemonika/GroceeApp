import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ItemsService } from '../shared/services/Items-service';


@Component({
  selector: 'app-shoplist',
  templateUrl: 'shoplist.component.html'
})

export class ShopListComponent {
  itemsList: any = {}
  selectedType:any;
  date:any;

  constructor( private route: ActivatedRoute,
               private itemsService: ItemsService ) {

    this.itemsList = this.itemsService.getItems();
    this.route.queryParams.subscribe(params => {

      if (params['type']) {
        this.selectedType = params['type'];
      }
    });
    this.date=new Date();
  }
}
