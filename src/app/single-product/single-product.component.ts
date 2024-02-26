import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../services/Items-service';


@Component({
  selector: 'app-single-product',
  templateUrl: 'single-product.component.html'
})

export class SingleProductComponent implements OnInit {
  selectedType: any;
  product: any;

  constructor(private route: ActivatedRoute,
    private itemsService: ItemsService) {
    this.route.queryParams.subscribe(params => {

      if (params['type']) {
        this.selectedType = params['type'];
      }
    });
   }

  ngOnInit() {

    this.itemsService.getItems().then((resp: any) => {
      if (resp && this.selectedType) {
        this.product = this.itemsService.itemsList.filter((item: any) => this.selectedType == item.id)[0];
      }
    });
  }
}
