import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';
import {  TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    TranslateModule
  ]
})
export class NotFoundModule { }
