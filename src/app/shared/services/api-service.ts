import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError, Observable, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
// import { FormArray } from '@angular/forms';

// import { Cache } from './cache';
// import { ToastService } from './toast-service';
import { CONFIG } from './config';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private actionSource = new Subject<any>();
  currentAction = this.actionSource.asObservable();
  timeOutTimers = [];

  isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) platformId: Object,
              // private cache: Cache,
              public sanitizer: DomSanitizer,
              // public toastService: ToastService,
              private http: HttpClient
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  sendAction(message: any) {
    this.actionSource.next(message);
  }

  // uploadWithProgress(url:any, data) {
  //   return this.http.post(CONFIG.SERVER_URL + url, data, {
  //                           reportProgress: true,
  //                           observe: 'events',
  //           }).pipe(map(res => res as {}), catchError(this.handleError([])));
  // }

  appendCommonParameters(data:any) {

    if(data == undefined || !data)   data = {};

    // if (this.cache.user) {

    //   if(data.restaurantId == undefined){
    //     data.restaurantId = data.restaurantId? data.restaurantId: (this.cache.user.restaurant?.id ? this.cache.user.restaurant.id : '');
    //   }
    //   if(data.tableId == undefined){
    //     data.tableId = data.tableId? data.tableId: (this.cache.user.table?.id ? this.cache.user.table.id : '');
    //   }
    //   if(data.deviceId == undefined){
    //     data.deviceId = data.deviceId? data.deviceId: (this.cache.user.device?.id? this.cache.user.device.id : '');
    //   }
    //   if(data.orderId == undefined){
    //     data.orderId = data.orderId ? data.orderId : this.cache.orderId;
    //   }
    // }

    if(data.uuid == undefined){
      // data.uuid = this.cache.deviceInfo?.uuid;
    }

    return data;
  }
  getApi(url:any, params:any) {


    params = this.appendCommonParameters(params);

    return new Promise((resolve, reject) => {
      this.http
        .get(CONFIG.SERVER_URL + url, { params: params })
        .pipe(
          map((res: any) => res),
          catchError(this.handleError())
        )
        .subscribe(
          (res) => {
            resolve(res);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  postApi(url: any, data: any, headers: any) {
    if (!headers || !headers.get('Content-Type')) {
      headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    }

    data = this.appendCommonParameters(data);
    console.log(CONFIG.SERVER_URL + url,'url');

    return new Promise((resolve, reject) => {
      this.http
        .post(CONFIG.SERVER_URL + url, JSON.stringify(data), { headers: headers })
        .pipe(
          map((res: any) => res),
          catchError(this.handleError())
        )
        .subscribe(
          (res) => {
            resolve(res);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  apiCancellable(url: any, params: any) {
    params = this.appendCommonParameters(params);

    return this.http.get(CONFIG.SERVER_URL + url, { params: params })
              .pipe(map(res => res as {}), catchError(this.handleError([])));
  }
  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      let errorMessage = CONFIG.messages.http_error;
      if (error.error && error.error.message) {
        errorMessage = `${error.error.message}`;
      } else if (error.statusText) {
        errorMessage = `${error.statusText}`;
      } else if (error.message) {
        errorMessage = `${error.message}`;
      } else if ( typeof error === 'string' ) {
        errorMessage = error;
      }
      return throwError(() => error);
    };
  }

  sanitizeBase64(base64: any) {
    return this.sanitizer.bypassSecurityTrustUrl(base64);
  }

  unSubscribe(subs: any) {
    if (
      subs &&
      typeof subs === 'object' &&
      typeof subs.unsubscribe === 'function'
    ) {
      subs.unsubscribe();
    } else {
      if (subs && subs.length) {
        subs.forEach((localSub: any) => {
          this.unSubscribe(localSub);
        });
      } else if (subs && typeof subs === 'object') {
        Object.keys(subs).forEach((key) => {
          this.unSubscribe(subs[key]);
        });
      } else {
        console.log('Not sure what it is...', subs);
      }
    }
  }

  clearTimeOuts(){
    if(this.timeOutTimers && this.timeOutTimers.length){
      this.timeOutTimers.forEach((timer)=>{
        clearTimeout(timer);
      })
    }
  }
}
