import { Component, OnInit, Input } from '@angular/core';
// import { downloadImage } from '../utils';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: []
})
export class CardComponent implements OnInit {
  @Input() _id: string;
  @Input() name: string;
  @Input() prompt: string;
  @Input() photo: string;
  constructor(){
    this._id = '';
    this.name= '';
    this.prompt= '';
    this.photo ='';

  }

  isHovered: boolean = false;

  ngOnInit() {
    console.log(`Card Component Initialized: ${this._id}`);
  }

  onCardHover() {
    this.isHovered = true;
  }

  onCardLeave() {
    this.isHovered = false;
  }

  // downloadImage() {
  //   downloadImage(this._id, this.photo);
  // }
}



