import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../services/Items-service';
import { CartService } from '../services/cart-service';


@Component({
  selector: 'app-single-product',
  templateUrl: 'single-product.component.html'
})

export class SingleProductComponent implements OnInit {
  selectedType: any;
  product: any;
  selectedQty: number =0;

  constructor(private route: ActivatedRoute,
    private itemsService: ItemsService,
    public cartService: CartService) {
    this.route.queryParams.subscribe(params => {

      if (params['product']) {
        this.selectedType = params['product'];
      }
    });
   }

  ngOnInit() {

    this.itemsService.getItems().then((resp: any) => {
      if (resp && this.selectedType) {
        this.product = this.itemsService.itemsList.filter((item: any) => {
          if (this.selectedType == item.id) {
            this.selectedQty = this.cartService.cartMenuItems[item?.id] ? this.cartService.cartMenuItems[item.id]?.quantity : 0;
            return item;
          }
        })[0];
      }
    });
  }
  addItem() {
    this.selectedQty++;


    // if (!this.isCartScreen && this.menu.attributes?.length) {
    //   this.presentActionSheet('add', this.menu.attributes);
    // } else {
    this.cartService.updateCartMenuItemsQty(this.product, 'add');
    // this.updateQtyLocally();
    // }
  }
  removeItem() {
    console.log('remove');
    if (this.selectedQty === 0) return;
     this.selectedQty--;
    this.cartService.updateCartMenuItemsQty(this.product, 'remove');
    if (this.selectedQty === 1) {
      // this.openModel();
      // return;
    }
    // if (this.menu.status >= 50) {
    //   this.toast.show('Menu Item is being prepared.', 'warning');
    //   return;
    // }

    // if (this.item.orderItemId && this.selectedQty === 1) {
    // this.openModel();
    //   return;
    // }

  }
}
