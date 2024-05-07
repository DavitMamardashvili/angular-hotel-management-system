import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterSelectedUiService } from '../../service/filter-selected-ui.service';
import { FilterVisibalUiService } from '../../service/filter-visibal-ui.service';
import { FilterModel } from '../../models/FilterModel';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input() objectForFilterArea: any;
  @Output() filterData: EventEmitter<FilterModel> = new EventEmitter<FilterModel>

  constructor(public filterSelectedUi :FilterSelectedUiService , public filterVisible:FilterVisibalUiService){}

  onFormSubmit() {
  this.filterData.emit(this.filterSelectedUi.filtermodel)
  }

}
