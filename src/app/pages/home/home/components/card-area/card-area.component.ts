import { Component, EventEmitter, Input, NgZone, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-area',
  templateUrl: './card-area.component.html',
  styleUrl: './card-area.component.css'
})
export class CardAreaComponent {
  @Input() hotels: any[] = [];
  @Output() hotelIdEmiter: EventEmitter<any> = new EventEmitter()

  getHotel(hotel: any) {
    this.hotelIdEmiter.emit({ id: hotel.id })
  }
}
