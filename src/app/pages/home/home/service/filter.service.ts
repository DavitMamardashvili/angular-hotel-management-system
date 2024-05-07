import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private objectForFilterArea: any = {
    amenities: [],
    city: [] ,
    roomType: [],
    rating : []
  };

  populateFilterArea(data: any[]) {
    this.extractUniqueAmenitiesFromRooms(data);
    this.extractUniqueCitiesFromRooms(data);
    this.extractUniqueRoomTypesFromRooms(data);
    this.extractUniqueRaiting(data)
    this.sortObjectForFilterArea()
    return this.objectForFilterArea 
  }

  private extractUniqueAmenitiesFromRooms(data: any[]) {
    data.forEach((item: any) => {
      if (item.rooms) {
        item.rooms.forEach((room: any) => {
          if (room.amenities) {
            room.amenities.forEach((amenity: string) => {
              if (!this.objectForFilterArea.amenities.includes(amenity)) {
                this.objectForFilterArea.amenities.push(amenity);
              }
            });
          }
        });
      }
    });
  }

  private extractUniqueCitiesFromRooms(data: any[]) {
    data.forEach((item: any) => {
      if (item.address && item.address.city) {
        const city = item.address.city;
        if (!this.objectForFilterArea.city.includes(city)) {
          this.objectForFilterArea.city.push(city);
        }
      }
    });
  }
  
  private extractUniqueRoomTypesFromRooms(data: any[]) {
    data.forEach((item: any) => {
      if (item.rooms) {
        item.rooms.forEach((room: any) => {
          if (room.roomType && !this.objectForFilterArea.roomType.includes(room.roomType)) {
            this.objectForFilterArea.roomType.push(room.roomType);
          }
        });
      }
    });
  }

  private extractUniqueRaiting(data: any[]) {
    data.forEach((item: any) => {
      if (item.rating ) {
        const rating = item.rating;
        if (!this.objectForFilterArea.rating.includes(rating)) {
          this.objectForFilterArea.rating.push(rating);
        }
      }
    });
  }

  private sortObjectForFilterArea(): void {
    Object.keys(this.objectForFilterArea).forEach(key => {
      if (Array.isArray(this.objectForFilterArea[key])) {
        this.objectForFilterArea[key].sort();
      }
    });
  }

  public filterParams(event : any){
    return Object.entries(event)
    .filter(([key, value]) => value !== undefined && value !== '' && value !== 'show more +' && value !== 'show less -')
    .map(([key, value]) => `${key}=${encodeURIComponent(value as string)}`)
  }
  
}
