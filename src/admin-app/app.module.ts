import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../shared/services/token-interceptor';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddCategoryComponent } from './add-category.component';
import { NgxWebstorageModule } from 'ngx-webstorage';

@NgModule({
  declarations: [AppComponent, AddCategoryComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
            NgxWebstorageModule.forRoot(),],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {}
