import { Injectable } from '@angular/core';
import { FilterModel } from '../components/models/FilterModel';

@Injectable({
  providedIn: 'root'
})
export class FilterSelectedUiService {
  filtermodel:FilterModel = new FilterModel()

  toggleOption(option: string, type: string) {
    switch (type) {
      case 'location':
        this.filtermodel.city = this.filtermodel.city === option ? '' : option;
        break;
      case 'accommodation':
        this.filtermodel.roomType = this.filtermodel.roomType === option ? '' : option;
        break;
      case 'rating':
        this.filtermodel.minRating = this.filtermodel.minRating === option ? '' : option;
        break;
      case 'amenity':
        this.filtermodel.amenities = this.filtermodel.amenities === option ? '' : option;
        break;
      default:
        break;
    }
  }

  updateSelectedMaxPrice(event: Event) {
    this.filtermodel.maxPricePerNight = parseInt(
      (event.target as HTMLInputElement).value,
      10
    );
  }

  handleDropdownClick(event: MouseEvent, type: string) {
    const target = event.target as HTMLElement;
    const option = target.getAttribute('data-option');
    if (option) {
      event.stopPropagation();
      this.toggleOption(option, type);
    }
  }
}
