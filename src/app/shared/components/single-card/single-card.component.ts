import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html'
})

export class SingleCardComponent {
  @Input() item:any;

  constructor() {
    
   }


}
