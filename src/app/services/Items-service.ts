import { Injectable } from '@angular/core';
import { ApiService } from '../shared/services/api-service';
import { CONFIG } from '../shared/services/config';

@Injectable()
export class ItemsService {
  itemsList: any = [];

  constructor(private apiService: ApiService) { }

  getItems(){
    return new Promise((resolve, reject) => {

      if (this.itemsList && this.itemsList.length) {
        resolve(true);
        return;
      }
      this.get("/ItemList", null).then((resp: any) => {
        // this.cache.orderId = '';
        // console.log(resp, 'respppppp final');
        this.itemsList = resp ;
        resolve(resp);
      }, (error) => {
        // this.cache.orderId = '';
        reject(error);
      });
    });
  }

  getWishlistItems() {
    return new Promise((resolve, reject) => {
      this.get("/WishList", null).then((resp: any) => {
        resolve(resp);
      }, (error) => {
        reject(error);
      });
    });
  }
  getCategories() {
    // return this.categoriesList.slice();
    return new Promise((resolve, reject) => {
      this.get("/Categories", null).then((resp: any) => {
        // this.cache.orderId = '';
        // console.log(resp,'respppppp final');

        resolve(resp);
      }, (error) => {
        // this.cache.orderId = '';
        reject(error);
      });
    });
  }
  get(url:any, data:any) {
    return new Promise((resolve, reject) => {
      this.apiService.getApi(url, data).then(
        (resp: any) => {
          // this._saveOrderIfReceived(resp?.order);
          resolve(resp);
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  }

}
