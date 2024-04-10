import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api-service';
import { CONFIG } from '../../shared/services/config';

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
      this.get(CONFIG.endpoints.getItemsList, null).then((resp: any) => {
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
  getCategory() {
    return new Promise((resolve, reject) => {
      this.get(CONFIG.endpoints.getCategory, null).then((resp: any) => {
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
