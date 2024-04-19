import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // hotels: any[] = [];

  // constructor(private http: HttpClient) { }

  // ngOnInit(): void {
  //   this.fetchHotels();
  // }

  // fetchHotels() {
  //   this.http.get('http://www.airbnb-digital-students.somee.com/get-all-hotels')
  //     .subscribe(
  //       (response: any) => {
  //         console.log("get hotels")
  //         console.log(response)
  //         this.hotels = response;
  //       },
  //       (error) => {
  //         console.error('Error fetching hotels:', error);
  //       }
  //     ); 
  // }
}
