import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  // private routerSubscription: Subscription;

  constructor(private router: Router,) {
     this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.urlAfterRedirects,'event.urlAfterRedirects');

        if (event.urlAfterRedirects.indexOf("/Home") !== -1) {

        } else if (event.urlAfterRedirects.indexOf("/Home") !== -1) {

        }
      }
    });
  }

}
