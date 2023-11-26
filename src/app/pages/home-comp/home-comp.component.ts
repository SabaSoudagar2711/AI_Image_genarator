import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',

  styleUrls: []
})
export class HomeCompComponent implements OnInit {
searchText: any;
searchedResults: any;
allPosts: any;
handleSearchChange($event: Event) {
throw new Error('Method not implemented.');
}


  constructor() { }

  ngOnInit(): void {
  }

}

