import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-hotelinfo',
  templateUrl: './hotelinfo.component.html',
  styleUrl: './hotelinfo.component.css'
})
export class HotelinfoComponent implements OnInit{
  hotel:any;


  constructor(private http: HttpClient) { 
    this.http.get('http://www.airbnb-digital-students.somee.com/get-by-id?id=5').subscribe((response:any) =>{
      this.hotel = response;
    })
  }

  ngOnInit(): void {
    this.fetchUnsplashImages()
  }

  fetchUnsplashImages() {
    const apiKey = 'NVm0woD0X5eU_DCxPFK0_3WcyyVZajPKKlW4-_u548Q';
    const apiUrl = `https://api.unsplash.com/photos/random?count=10&client_id=${apiKey}`;
    this.http
      .get(apiUrl)
      .pipe(
        map((response: any) => {
          const unsplashImages = response.map(
            (image: any) => image.urls.regular
          );
          this.hotel.rooms.roomImages = unsplashImages;
        })
      )
      .subscribe();
  }
}
