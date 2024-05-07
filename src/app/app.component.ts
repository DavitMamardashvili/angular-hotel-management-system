import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 cardObj:any ={
  "id": 2,
  "name": "Mountain Retreat",
  "address": {
    "street": "456 Hilltop Road",
    "city": "Aspen",
    "state": "CO",
    "country": "USA",
    "postalCode": "81611"
  },
  "description": "Escape to our mountain retreat for a refreshing stay surrounded by alpine beauty.",
  "rating": 4.8,
  "rooms": [
    {
      "roomId": 201,
      "roomType": "Single",
      "pricePerNight": 120,
      "maxOccupancy": 1,
      "amenities": [
        "Mountain view",
        "Wood fireplace"
      ],
      "roomImages": [
        {
          "imageId": 2011,
          "url": "https://source.unsplash.com/featured/?mountain+view",
          "description": "Single room with stunning mountain views and a cozy fireplace."
        },
        {
          "imageId": 2012,
          "url": "https://source.unsplash.com/featured/?cabin+room",
          "description": "Charming wood-themed room ideal for solo travelers."
        }
      ]
    },
    {
      "roomId": 202,
      "roomType": "Family Suite",
      "pricePerNight": 250,
      "maxOccupancy": 4,
      "amenities": [
        "Balcony",
        "Ski-in, ski-out"
      ],
      "roomImages": [
        {
          "imageId": 2021,
          "url": "https://source.unsplash.com/featured/?ski+lodge",
          "description": "Family suite with direct access to ski slopes and a private balcony."
        },
        {
          "imageId": 2022,
          "url": "https://source.unsplash.com/featured/?hotel+suite",
          "description": "Spacious suite perfect for families or groups."
        }
      ]
    }
  ],
  "images": [
    {
      "imageId": 2031,
      "url": "https://source.unsplash.com/featured/?mountain+resort",
      "description": "Aerial view of Mountain Retreat surrounded by snowy peaks."
    },
    {
      "imageId": 2032,
      "url": "https://source.unsplash.com/featured/?resort",
      "description": "The cozy and inviting exterior of our mountain lodge."
    }
  ],
  "checkInTime": {
    "ticks": 576000000000,
    "days": 0,
    "hours": 16,
    "milliseconds": 0,
    "minutes": 0,
    "seconds": 0,
    "totalDays": 0.6666666666666666,
    "totalHours": 16,
    "totalMilliseconds": 57600000,
    "totalMinutes": 960,
    "totalSeconds": 57600
  },
  "checkOutTime": {
    "ticks": 432000000000,
    "days": 0,
    "hours": 12,
    "milliseconds": 0,
    "minutes": 0,
    "seconds": 0,
    "totalDays": 0.5,
    "totalHours": 12,
    "totalMilliseconds": 43200000,
    "totalMinutes": 720,
    "totalSeconds": 43200
  },
  "owner": {
    "userId": 2,
    "fullName": "Alice Johnson",
    "email": "welcome@mountainretreat.com"
  }
}












  title = 'angular-hotel-management-system';

  constructor(private translateService: TranslateService, private fireAuth: AngularFireAuth) {
    this.translateService.setDefaultLang('eng');
    this.translateService.use(localStorage.getItem('lang') || 'eng');



  }

}
