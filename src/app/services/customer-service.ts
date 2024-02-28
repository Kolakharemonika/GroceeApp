import { Injectable } from '@angular/core';

import { CONFIG } from '../shared/services/config';
// import { Cache } from '../../shared/services/cache';
// import { ApiService } from '../../shared/services/api-service';
// import { UserService } from '../../shared/services/user-service';
import { CartService } from './cart-service';
import { ApiService } from '../shared/services/api-service';

// import { User, Restaurant, Device, Table } from '../../shared/models/user';
// import { MenuTreeDetails } from '../../shared/models/application';

@Injectable()
export class CustomerService {
  menuTree: any;

  leftSectionSrc: string;
  leftSectionTitle: string;

  billData: any;
  deviceMessage: string = '';

  constructor(
    // public cache: Cache,
              public apiService: ApiService,
              // public userService: UserService,
              public cartService: CartService,
  ) {
    this.leftSectionSrc = '';
    this.leftSectionTitle = '';
  }

  logoutAction() {
    // this.cartService.emptyCart();
    // this.cache.clearSession();
    // this.cartService.order = null;
    // this.billData = null;
    // this.deviceMessage = '';
  }

  logout() {

      setTimeout(()=> {

        this.logoutAction();
        // if(!this.userService.isDeviceSetup){
        //   //this.userService.logout();
        //   this.cache.user.token = null;
        // }

        // console.log(this.cache.user);
      }, 500);//just delay a bit

      return new Promise((resolve, reject) => {
        this.get(CONFIG.endpoints.clearTable, null).then((resp: any) => {
        //  this.cache.orderId = '';
          resolve(resp);
        }, (error) => {
          // this.cache.orderId = '';
          reject(error);
        });
      });
  }

  _saveOrderIfReceived(order: any){

    if(order && order.id && order.customer && order.customer.id){

      this.cartService.order = order;
      // this.cache.orderId = order.id;

      // this.cache.setSession('order', this.cartService.order);

      if(order.orderItems){
        // order.orderItems.forEach((oi) => {
        //   if(oi.status < 50){
        //     let id = oi.attribute?.menuItemAttribute ? `${oi.menuItem.id}-${oi.attribute.menuItemAttribute.id}` : oi.menuItem.id;

        //     if(!this.cartService.cartMenuItems[id] ) {
        //       this.cartService.updateCartMenuItemsQty(oi.menuItem, 'add', oi.attribute?.menuItemAttribute);
        //       this.cartService.cartMenuItems[id].quantity = oi?.quantity;
        //     }
        //      if (this.cartService.cartMenuItems[id]){
        //       this.cartService.cartMenuItems[id].orderItemId = oi.id;
        //       this.cartService.cartMenuItems[id].status = oi.status;
        //     }
        //   }
        // });
        this.cartService.saveCart();
      }
    }
  }
  get(url:any, data:any) {
    return new Promise((resolve, reject) => {
      this.apiService.postApi(url, data, null).then(
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

  save(url:any, data:any) {
    return new Promise((resolve, reject) => {
      this.apiService.postApi(url, data, null).then(
        (resp: any) => {
          if (resp.success) {

            // this._saveOrderIfReceived(resp?.order);
            resolve(resp);
          } else {
            reject(resp.message);
          }
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  }

  /* Add All custom methods below using above common functions for GET / POST type method */

  // doOnboardCustomer(data) {

  //   data.deviceModel = this.cache.deviceInfo.model;
  //   data.deviceOs = this.cache.deviceInfo.os;

  //   return new Promise((resolve, reject) => {
  //     this.apiService.postApi(CONFIG.endpoints.onboardCustomer, data, null).then((resp: any) => {
  //       if (resp.token) {

  //         this.cache.user.refresh_token_expiration = resp.refresh_token_expiration;
  //         this.cache.user.refresh_token = resp.refresh_token;
  //         this.cache.user.token = resp.token;
  //         this.cache.user.role = resp.role;

  //         if(resp.permissions) this.cache.user.permissions = resp.permissions;
  //         if(resp.restaurant) this.cache.user.restaurant = new Restaurant(resp.restaurant);
  //         if(resp.device) this.cache.user.device = new Device(resp.device);
  //         if(resp.table) this.cache.user.table = new Table(resp.table);
  //         if(resp.topicUrl) this.cache.user.topicUrl = resp.topicUrl;
  //         if(resp.mercureAuthorizationToken) this.cache.user.mercureAuthorizationToken = resp.mercureAuthorizationToken;

  //         this.cache.saveUser(resp.device?.id || this.userService.journey == 'kitchen');

  //         resolve(resp);
  //       } else {
  //         reject(resp.message);
  //       }
  //     }, (error) => {
  //       reject(error);
  //     });
  //   });
  // }

  getDeviceStatus() {

    return new Promise((resolve, reject) => {
      this.get(CONFIG.endpoints.getDeviceStatus, null).then((resp: any) => {

        // if (resp.table?.id == this.cache.user.table?.id && resp.table.status == 30) {//merged table
        //   this.deviceMessage = resp.table.message;
        // }else {
        //   this.deviceMessage = '';
        // }

        this.apiService.sendAction({action: 'mercure_url_changed', topicUrl: resp.topicUrl});

        if(!resp.order){
          // this.cache.clearSession('order');
        }

        resolve(resp);
      }, (error) => {
        reject(error);
      });
    });
  }

  getMenuTree(data = null) {
    return new Promise((resolve, reject) => {

      if (this.menuTree && this.menuTree.length) {
        resolve(true);
        return;
      }
      this.get(CONFIG.endpoints.getMenuTree, data).then((resp: any) => {
        // this.menuTree = new MenuTreeDetails(resp);
        this.apiService.sendAction({ action: 'menu-loaded' });
        resolve(true);
      }, (error) => {
        reject(error);
      });
    });
  }
  validateOrderJoinOTP(data:any) {
    return new Promise((resolve, reject) => {
      this.save(CONFIG.endpoints.validateOrderJoinOTP, data).then((resp) => {
        resolve(resp);
      }, (error) => {
        reject(error);
      });
    });
  }
  startJourney(data: any) {
    return new Promise((resolve, reject) => {
      this.save(CONFIG.endpoints.startJourney, data).then((resp: any) => {

        // this.apiService.sendAction({action: 'mercure_url_changed', topicUrl: resp.topicUrl});

        resolve(resp);
      }, (error) => {
        reject(error);
      });
    });
  }

  sendRequest(data: any) {
    return new Promise((resolve, reject) => {
      this.save(CONFIG.endpoints.sendRequest, data).then((resp) => {
        resolve(resp);
      }, (error) => {
        reject(error);
      });
    });
  }
  askBillCopy() {
    return new Promise((resolve, reject) => {
      this.save(CONFIG.endpoints.askBillCopy, null).then((resp) => {
        resolve(resp);
      }, (error) => {
        reject(error);
      });
    });
  }

  updateBillData(data: any) {
    return new Promise((resolve, reject) => {
      this.save(CONFIG.endpoints.updateBillData, data).then((resp) => {
        resolve(resp);
      }, (error) => {
        reject(error);
      });
    });
  }
  getQRCode() {
    return new Promise((resolve, reject) => {
      this.get(CONFIG.endpoints.getQRCode, null).then((resp) => {
        resolve(resp);
      }, (error) => {
        reject(error);
      });
    });
  }
  getBill() {
    return new Promise((resolve, reject) => {
      this.get(CONFIG.endpoints.getBill, null).then((resp) => {

        this.billData = resp;
        this.billData.totalAmount = (Number(this.billData.order.netTotal) - Number(this.billData.order.discountedPrice) + Number(this.billData.totalOrderCharges));

        resolve(resp);
      }, (error) => {
        reject(error);
      });
    });
  }
  applyCoupon(code:any) {
    return new Promise((resolve, reject) => {
      this.save(CONFIG.endpoints.applyCoupon, { 'code': code }).then((resp) => {

        this.billData = resp;
        this.billData.totalAmount = (Number(this.billData.order.netTotal) - Number(this.billData.order.discountedPrice) + Number(this.billData.totalOrderCharges));

        resolve(resp);
      }, (error) => {
        reject(error);
      });
    });
  }
  applyTip(data:any) {
    return new Promise((resolve, reject) => {
      this.save(CONFIG.endpoints.applyTip, data).then((resp) => {

        this.billData = resp;
        this.billData.totalAmount = (Number(this.billData.order.netTotal) - Number(this.billData.order.discountedPrice) + Number(this.billData.totalOrderCharges));

        resolve(resp);
      }, (error) => {
        reject(error);
      });
    });
  }

  getCoupons() {
    return new Promise((resolve, reject) => {
      this.get(CONFIG.endpoints.getCoupons, null).then((resp) => {
        resolve(resp);
      }, (error) => {
        reject(error);
      });
    });
  }
  addToOrder() {

    let postData = Object.values(this.cartService.cartMenuItems).map(item => {
      return {
        id: item.id,
        quantity: item.quantity,
        // instructionNote: item.instructionNote ? item.instructionNote : '',
        orderItemId: item.orderItemId?item.orderItemId:'',
        // menuItemAttributeId: item.selectedMenuItemAttributes? item.selectedMenuItemAttributes.id: null
      }
    });

    return new Promise((resolve, reject) => {
      this.save(CONFIG.endpoints.addToOrder, {'menuItems': postData}).then((resp: any) => {
        resolve(resp);
      }, (error) => {
        reject(error);
      });
    });
  }

  getReview(data:any) {
    return new Promise((resolve, reject) => {
      this.get(CONFIG.endpoints.getReview, data).then((resp) => {
        resolve(resp);
      }, (error) => {
        reject(error);
      });
    });
  }

  saveReview(data: any) {
    return new Promise((resolve, reject) => {
      this.save(CONFIG.endpoints.saveReview, data).then((resp) => {
        resolve(resp);
      }, (error) => {
        reject(error);
      });
    });
  }

  getPromoCoupons() {
    return new Promise((resolve, reject) => {
      this.get(CONFIG.endpoints.getPromoCoupons, null).then((resp) => {
        resolve(resp);
      }, (error) => {
        reject(error);
      });
    });
  }

  cancelOrderItem(data:any){
    return new Promise((resolve, reject) => {
      this.save(CONFIG.endpoints.cancelOrderItem, data).then((resp) => {
        resolve(resp);
      }, (error) => {
        reject(error);
      });
    });
  }

}
