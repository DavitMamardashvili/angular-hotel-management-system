import { Injectable } from '@angular/core';
import { FilterVisibalModel } from '../components/models/FilterVisibalModel';

@Injectable({
  providedIn: 'root'
})
export class FilterVisibalUiService {

  filterVisibalModel:FilterVisibalModel = new FilterVisibalModel()

  toggleMoreItems(type: string) {
      switch (type) {
        case 'amenity':
          if (this.filterVisibalModel.visibleAmenities.length === 9) {
            this.filterVisibalModel.visibleAmenities = this.filterVisibalModel.amenityItems;
            this.filterVisibalModel.showMore = 'show less -';
          } else {
            this.filterVisibalModel.visibleAmenities = this.filterVisibalModel.amenityItems.slice(0, 9);
            this.filterVisibalModel.showMore = 'show more +';
          }
          break;
        case 'accommodation':
          if (this.filterVisibalModel.visibleAccommodations.length === 7) {
            this.filterVisibalModel.visibleAccommodations = this.filterVisibalModel.accommodationItems;
            this.filterVisibalModel.showMore = 'show less -';
          } else {
            this.filterVisibalModel.visibleAccommodations = this.filterVisibalModel.accommodationItems.slice(0, 7);
            this.filterVisibalModel.showMore = 'show more +';
          }
          break;
        case 'location':
          if (this.filterVisibalModel.visibleLocations.length === 7) {
            this.filterVisibalModel.visibleLocations = this.filterVisibalModel.locationItems;
            this.filterVisibalModel.showMore = 'show less -';
          } else {
            this.filterVisibalModel.visibleLocations = this.filterVisibalModel.locationItems.slice(0, 7);
            this.filterVisibalModel.showMore = 'show more +';
          }
          break;
      }
    }

    toggleDropdown(index: number) {
      this.filterVisibalModel.activeDropdown = this.filterVisibalModel.activeDropdown === index ? -1 : index;
    }
}
