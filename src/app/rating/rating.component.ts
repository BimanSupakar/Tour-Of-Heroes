import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() rating?: number; 
  @Input() id?: number;    
  @Output() ratingClick:EventEmitter<any> = new EventEmitter<any>();
  
  inpustName?:string;


  ngOnInit() {
      this.inpustName = this.id + '_rating';
  }
  onClick(rating:number):void{
      this.rating = rating;
      this.ratingClick.emit({
          id: this.id,
          rating: this.rating
      });
  }    
}