import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from '../services/Items-service';


@Component({
  selector: 'app-orders-list',
  templateUrl: 'orders.component.html'
})

export class OrdersListComponent implements OnInit {
  itemsList: any = []

  constructor(private router: Router,
    private itemsService: ItemsService) {

   }
   ngOnInit() {
     this.itemsService.getItems().then((resp: any) => {
      if (!resp)  return;
      this.itemsList = this.itemsService.itemsList;
     });
   }

  gotoProduct(product: string) {
    this.router.navigate(['/Product'], { queryParams: { product } });
  }
}
