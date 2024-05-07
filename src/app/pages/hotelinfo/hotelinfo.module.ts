import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelinfoComponent } from './hotelinfo/hotelinfo.component';
import { ImageAreaComponent } from './hotelinfo/components/image-area/image-area.component';
import { ReservationAreaComponent } from './hotelinfo/components/reservation-area/reservation-area.component';
import { CommitAreaComponent } from './hotelinfo/components/commit-area/commit-area.component';
import { HotelinfoRoutingModule } from './hotelinfo-routing.module';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  declarations: [
    HotelinfoComponent,
    ImageAreaComponent,
    ReservationAreaComponent,
    CommitAreaComponent
  ],
  imports: [
    CommonModule,
    HotelinfoRoutingModule, 
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class HotelinfoModule { }
