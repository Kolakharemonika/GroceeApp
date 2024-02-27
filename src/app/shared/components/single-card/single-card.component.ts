import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CartService } from '../../../services/cart-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html'
})

export class SingleCardComponent implements OnChanges {
  @Input() item: any;
  selectedQty: number = 0;

  constructor(private cartService: CartService,
              private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item']['currentValue']) {
      this.selectedQty = this.cartService.cartMenuItems[this.item?.id] ? this.cartService.cartMenuItems[this.item.id]?.quantity : 0;
    }
  }

  addItem() {
    this.selectedQty++ ;
    // if (!this.isCartScreen && this.menu.attributes?.length) {
    //   this.presentActionSheet('add', this.menu.attributes);
    // } else {
      this.cartService.updateCartMenuItemsQty(this.item, 'add');
      // this.updateQtyLocally();
    // }
  }

  removeItem() {
    if (this.selectedQty === 0) return;
    console.log('remove');
    this.selectedQty--;
    this.cartService.updateCartMenuItemsQty(this.item, 'remove');
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

  gotoProduct(product: string) {
    this.router.navigate(['/Product'], { queryParams: { product } });
  }
}
