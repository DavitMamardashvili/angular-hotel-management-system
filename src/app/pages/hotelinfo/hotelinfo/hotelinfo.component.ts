import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hotelinfo',
  templateUrl: './hotelinfo.component.html',
  styleUrl: './hotelinfo.component.css'
})
export class HotelinfoComponent {
  hotel: any;

  constructor(private httpService: HttpService, private location: Location) {
    this.httpService.getData('get-by-id?id=' + this.getID()).subscribe((response: any) => {
      this.hotel = response;
      if (this.hotel.images.length < 8) {
        this.httpService.fetchUnsplashImages(this.hotel, 8 - this.hotel.images.length).subscribe();
      }
    })
  }

  getID():string {
    return this.location.path().includes("3D") 
      ? this.location.path().split("3D")[1] 
      : '';  }
}
