import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ItemsService } from '../services/Items-service';


@Component({
  selector: 'app-shoplist',
  templateUrl: 'shoplist.component.html'
})

export class ShopListComponent implements OnInit{
  itemsList: any = []
  selectedType: any;
  date:any;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private itemsService: ItemsService ) {

    this.route.queryParams.subscribe(params => {

      if (params['type']) {
        this.selectedType = params['type'];
      }
    });

    this.date=new Date();
  }

  ngOnInit(){
    console.log(this.selectedType, this.itemsList, this.itemsService.itemsList);

    this.itemsService.getItems().then((resp: any) => {
      if (resp) {
        if (this.selectedType) {
          this.itemsList = this.itemsService.itemsList.filter((item: any) => this.selectedType == item.categories.id)
        }else {
          this.itemsList = this.itemsService.itemsList;
        }
      }
      console.log(resp);
    });
  }

  gotoItem(type: string) {
    this.router.navigate(['/Product'], { queryParams: { type } });
  }
}
