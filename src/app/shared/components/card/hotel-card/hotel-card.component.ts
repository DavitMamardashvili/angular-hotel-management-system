import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  map } from 'rxjs';
import { HttpService } from '../../../../core/services/http.service';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrl: './hotel-card.component.css'
})
export class HotelCardComponent  {
  @Input('getHotel') hotel: any;
  @Output('emitHotel') hotelEmiter :EventEmitter<any> = new EventEmitter()

  constructor(private http:HttpService){}

  ngOnInit(): void {
    this.hotel.current = 0;
    if (this.hotel.images.length < 4) {
      this.http.fetchUnsplashImages(this.hotel, 4 - this.hotel.images.length).subscribe();
    }
  }
  
  onCardBtnClick(hotel:any){
    console.log("clicked in btn")
    this.hotelEmiter.emit(hotel);
  }

  next() {
    this.hotel.current++;
  }

  prev() {
    this.hotel.current--;
  }

}
