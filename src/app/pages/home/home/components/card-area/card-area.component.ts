import { HttpClient } from '@angular/common/http';
import { Component, Input, NgZone, OnInit } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-card-area',
  templateUrl: './card-area.component.html',
  styleUrl: './card-area.component.css'
})
export class CardAreaComponent  {
  @Input() hotels: any[] = [];
}
