import { Injectable } from '@angular/core';
// import { Preferences as Storage } from '@capacitor/preferences';
// import { Device } from '@capacitor/device';
import { SessionStorageService } from 'ngx-webstorage';

import { User } from '../models/application';
// import { WindowService } from './window-service';

@Injectable({
    providedIn: 'root',
})
export class Cache {
    user!: User;
    isLoggedIn: boolean = false;
    orderId: any;

    constructor( private sessionStorage: SessionStorageService ) {

      // this.isLoggedIn = false;

      this.getSession('user').then((user)=>{
        console.log(user,'user');
        this.user = user ? new User(user) : new User(null);
        this.saveUser();
      })
      this.getSession('isLoggedIn').then((isLoggedIn:any) => {
        this.isLoggedIn = isLoggedIn;
      })
    }

    saveUser(isPermanent=false) {
        if (isPermanent) {
            this.set('user', this.user);
        } else {
            this.setSession('user', this.user);
        }
    }

    loadUserFromCache() {
        return new Promise((resolve, reject) => {
            if (!this.user ) {
              this.getSession('user').then((user) => {
                console.log(user, 'user');
                this.user = user ? new User(user) : new User(null);
                this.saveUser();
              })
            } else {
                resolve(this.user);
            }
        });
    }

    setSession(key:any, val:any) {
        let str = typeof val === 'string' ? val : JSON.stringify(val);
        this.sessionStorage.store(key, str);
    }

    getSession(key:any) {
      return new Promise((resolve, reject) => {
      let val = this.sessionStorage.retrieve(key);

          if (typeof val == 'string') {
            const valObj = JSON.parse(val);
            if (typeof valObj == 'object') {
              console.log(valObj);

              resolve(valObj) ;
            } else {
              resolve(valObj);
            }
          }
        resolve(val) ;
        });
    }
    clearSession(key:any=null) {

        if(key){
            this.sessionStorage.clear(key);
        } else {
            this.sessionStorage.clear();
        }
        return;
    }

    // Do not Make public, its made private to enforce use of custome methods to save in prefrences like saveUser
    private set(key:any, val:any) {
        // Storage.set({
        //     key: key,
        //     value: typeof val === 'string' ? val : JSON.stringify(val),
        // });
    }

    get(key:any) {

        // return new Promise((resolve, reject) => {

        //     Storage.get({ key: key }).then((ret) => {

        //         let val = JSON.parse(ret.value);
        //         if (typeof val == 'object') {
        //             resolve(val);
        //         } else {
        //             resolve(ret.value);
        //         }
        //     });
        // });
    }
    remove(key:any) {
        // return Storage.remove({ key: key });
    }
    clear() {
        // if (!this.winService.isBrowser || true) return;
        this.clearSession();
        // return Storage.clear();
    }
}
