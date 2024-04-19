import { HttpClient } from '@angular/common/http';
import { Component, Input, NgZone, OnInit } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-card-area',
  templateUrl: './card-area.component.html',
  styleUrl: './card-area.component.css'
})
export class CardAreaComponent {
  @Input() hotels: any[] = [];

  // constructor(private http: HttpClient) { 

  

  // ngOnInit(): void {
  //   console.log('hotel')

  //   this.hotels.forEach((hotel) => {
  //     console.log('hotel')
  //     hotel.current = 0;
  //     if (hotel.images.length < 4) {
  //       this.fetchUnsplashImages(hotel, 4 - hotel.images.length).subscribe();
  //     }
  //   });
  // }

  // fetchUnsplashImages(hotel: any, count: number): Observable<any> {
  //   console.log('fetching')
  //   const apiKey = 'NVm0woD0X5eU_DCxPFK0_3WcyyVZajPKKlW4-_u548Q';
  //   const apiUrl = `https://api.unsplash.com/photos/random?count=${count}&client_id=${apiKey}`;
  //   return this.http.get(apiUrl).pipe(
  //     map((response: any) => {
  //       const unsplashImages = response.map((image: any) => ({
  //         url: image.urls.regular,
  //       }));
  //       hotel.images = [...hotel.images, ...unsplashImages];
  //     })
  //   );
  // }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchHotels();
  }

  fetchHotels() {
    this.http.get('http://www.airbnb-digital-students.somee.com/get-all-hotels')
      .subscribe(
        (response: any) => {
          this.hotels = response;
        },
        (error) => {
          console.error('Error fetching hotels:', error);
        }
      ); 
  }
}
