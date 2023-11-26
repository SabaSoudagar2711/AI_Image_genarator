import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  template:'<app-header-comp></app-header-comp><router-outlet></router-outlet>>',


  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AIimageGenerator';

}
