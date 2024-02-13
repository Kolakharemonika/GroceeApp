import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-shoplist',
  templateUrl: 'shoplist.component.html'
})

export class ShopListComponent {
  selectedType:any;
  constructor(private route: ActivatedRoute,) {
    this.route.queryParams.subscribe(params => {

      if (params['type']) {
        this.selectedType = params['type'];
      }
    });
  }
}
