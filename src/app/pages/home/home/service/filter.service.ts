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
    this.Raiting(data)
    this.sortObjectForFilterArea()
    return this.objectForFilterArea // from min to max
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



  private Raiting(data: any[]) {
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
    // Sort each array property of objectForFilterArea
    Object.keys(this.objectForFilterArea).forEach(key => {
      if (Array.isArray(this.objectForFilterArea[key])) {
        this.objectForFilterArea[key].sort();
      }
    });
  }
}
