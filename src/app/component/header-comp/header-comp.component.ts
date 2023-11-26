import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-comp',
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.css'],


})
export class HeaderCompComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  handleButtonClick(): void {
   
    console.log('Button clicked! Add your specific logic.');
  }
}
