import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FilterComponent } from './home/components/filter/filter.component';
import { CardAreaComponent } from './home/components/card-area/card-area.component';
import { HotelCardComponent } from '../../shared/components/card/hotel-card/hotel-card.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    FilterComponent,
    CardAreaComponent,
    HotelCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
