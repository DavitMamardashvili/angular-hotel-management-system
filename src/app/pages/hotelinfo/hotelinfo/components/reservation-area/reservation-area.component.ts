import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';

@Component({
  selector: 'app-reservation-area',
  templateUrl: './reservation-area.component.html',
  styleUrl: './reservation-area.component.css'
})
export class ReservationAreaComponent {
  @Input() hotel:any
  selectedRangeValue: DateRange<Date> | undefined;
  // nextMonthDate: Date;


  selectedChange(m: any) {
    if (!this.selectedRangeValue?.start || this.selectedRangeValue?.end) {
      this.selectedRangeValue = new DateRange<Date>(m, null);
    } else {
      const start = this.selectedRangeValue.start;
      const end = m;
      if (end < start) {
        this.selectedRangeValue = new DateRange<Date>(end, start);
      } else {
        this.selectedRangeValue = new DateRange<Date>(start, end);
      }
    }
    console.log(this.selectedRangeValue)
  }


  calculateTotalPrice(): { totalPrice: number } {
    const start = this.selectedRangeValue?.start;
    const end = this.selectedRangeValue?.end;
    if (start && end) {
      const timeDiff = Math.abs(end.getTime() - start.getTime());
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
      const totalPrice = daysDiff * this.hotel.rooms[0].pricePerNight;
      return { totalPrice };
    }
    return { totalPrice: 0 };
  }
  
}
