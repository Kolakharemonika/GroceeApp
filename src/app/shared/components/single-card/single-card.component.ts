import { Component, Input } from '@angular/core';
import { CartService } from '../../../services/cart-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html'
})

export class SingleCardComponent {
  @Input() item: any;

  constructor(private cartService: CartService,
              private router: Router) { }

  addItem() {
    // if (!this.isCartScreen && this.menu.attributes?.length) {
    //   this.presentActionSheet('add', this.menu.attributes);
    // } else {
      this.cartService.updateCartMenuItemsQty(this.item, 'add');
      // this.updateQtyLocally();
    // }
  }

  removeItem() {
    // if (this.menu.status >= 50) {
    //   this.toast.show('Menu Item is being prepared.', 'warning');
    //   return;
    // }

    // if (this.item.orderItemId && this.selectedQty === 1) {
      // this.openModel();
    //   return;
    // }

  }

  gotoItem(type: string) {
    this.router.navigate(['/Product'], { queryParams: { type } });
  }
}
