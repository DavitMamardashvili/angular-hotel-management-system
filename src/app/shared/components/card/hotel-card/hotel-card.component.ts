import { HttpClient } from '@angular/common/http';
import { Component, Input, NgZone, OnInit } from '@angular/core';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrl: './hotel-card.component.css'
})
export class HotelCardComponent  {
  @Input() hotel: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.hotel.current = 0;
    if (this.hotel.images.length < 4) {
      this.fetchUnsplashImages(this.hotel, 4 - this.hotel.images.length).subscribe();
    }
  }

  fetchUnsplashImages(hotel: any, count: number) {
    const apiKey = 'NVm0woD0X5eU_DCxPFK0_3WcyyVZajPKKlW4-_u548Q';
    const apiUrl = `https://api.unsplash.com/photos/random?count=${count}&client_id=${apiKey}`;
    return this.http.get(apiUrl).pipe(
      map((response: any) => {
        const unsplashImages = response.map((image: any) => ({
          url: image.urls.regular,
        }));
        hotel.images = [...hotel.images, ...unsplashImages];
      })
    );
  }

  next() {
    this.hotel.current++;
  }

  prev() {
    this.hotel.current--;
  }

}
