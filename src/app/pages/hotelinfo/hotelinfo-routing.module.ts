import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HotelinfoComponent } from './hotelinfo/hotelinfo.component';


const routes: Routes = [
  { path: '', component: HotelinfoComponent, }

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HotelinfoRoutingModule { }
