import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input() objectForFilterArea: any;
  @Output() filterData: EventEmitter<NgForm> = new EventEmitter<NgForm>

  activeDropdown: number = -1;


  onFormSubmit(form: NgForm) {
    this.filterData.emit(form);
  }

  toggleDropdown(index: number) {
    this.activeDropdown = this.activeDropdown === index ? -1 : index;
  }

}
