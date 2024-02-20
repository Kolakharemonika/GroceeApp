import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-completed',
  template: `
  <ion-button size="large" (click)="navigateHome()"> RETURN TO STORE  </ion-button>
`
})

export class CompletedComponent {

  constructor(private router: Router) { }
  navigateHome(){
    this.router.navigate(['/Home']);
  }
}
