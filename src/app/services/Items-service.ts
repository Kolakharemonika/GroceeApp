import { Injectable } from '@angular/core';
import { ApiService } from '../shared/services/api-service';
// import { environment } from '../../environments/environment';
import { CONFIG } from '../shared/services/config';

@Injectable()
export class ItemsService {
  itemsList: any = [{
    id:1,
    discount: '50%',
    avatar: 'assets/images/product1.jpg',
    title: 'Surf Excel Matic Top Load Detergent Powder(Carton)',
    price: '800.99',
    discountedPrice: '600.99',
    quantity: '2 kg'
  },
  {
    id: 2,
    discount: '50%',
    avatar: 'assets/images/product1.jpg',
    title: 'Surf Excel Matic Top Load Detergent Powder(Carton)',
    price: '800.99',
    discountedPrice: '600.99',
    quantity: '2 kg'
  },
  {
    id: 3,
    discount: '60%',
    avatar: 'assets/images/product1.jpg',
    title: 'Surf Excel Matic Top Load Detergent Powder(Carton)',
    price: '800.99',
    discountedPrice: '600.99',
    quantity: '2 kg'
  },
  {
    id: 4,
    discount: null,
    avatar: 'assets/images/product1.jpg',
    title: 'Surf Excel Matic Top Load Detergent Powder(Carton)',
    price: '800.99',
    discountedPrice: '600.99',
    quantity: '2 kg'
  }];


  constructor(private apiService: ApiService) { }

  getItems(){
    return this.itemsList.slice();
  }
  getCategories() {
    // return this.categoriesList.slice();
    return new Promise((resolve, reject) => {
      this.get('/Categories', null).then((resp: any) => {
        // this.cache.orderId = '';
        console.log(resp,'respppppp final');

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
