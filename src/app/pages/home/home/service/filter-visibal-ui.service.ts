import { Injectable } from '@angular/core';
import { FilterVisibalModel } from '../models/FilterVisibalModel';

@Injectable({
  providedIn: 'root'
})
export class FilterVisibalUiService {
  
  filterVisibalModel:FilterVisibalModel = new FilterVisibalModel()

    toggleDropdown(index: number) {
      this.filterVisibalModel.activeDropdown = this.filterVisibalModel.activeDropdown === index ? -1 : index;
    }

    showMore(num: number): void {
      switch (num) {
        case 0:
          this.filterVisibalModel.showMoreAccommodation = !this.filterVisibalModel.showMoreAccommodation;
          break;
        case 1:
          this.filterVisibalModel.showMoreAmenity = !this.filterVisibalModel.showMoreAmenity;
          break;
        case 2:
          this.filterVisibalModel.showMoreLocation = !this.filterVisibalModel.showMoreLocation;
          break;
        default:
          console.error("Invalid value for 'num'. Expected values: 0, 1, or 2.");
          break;
      }
    }
}

