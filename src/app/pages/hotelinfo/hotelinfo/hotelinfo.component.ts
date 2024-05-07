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
    const currentUrl = this.location.path();
    const id = currentUrl[currentUrl.length - 1];
    this.httpService.getData('get-by-id?id=' + id).subscribe((response: any) => {
      this.hotel = response;
      if (this.hotel.images.length < 8) {
        this.httpService.fetchUnsplashImages(this.hotel, 8 - this.hotel.images.length).subscribe();
      }
    })
  }
}
