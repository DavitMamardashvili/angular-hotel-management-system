import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterService } from './service/filter.service';
import { delay } from 'rxjs';
import { FilterModel } from './models/FilterModel';
import { HttpService } from '../../../core/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  hotels: any[] = [];
  objectForFilterArea: any;

  constructor(
    private filterService: FilterService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http:HttpService) {
    this.fetchHotels();
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(delay(500)).subscribe(value => this.getFilterData(value));
  }

  fetchHotels() {
    this.http.getData('get-all-hotels')
      .subscribe((response: any) => {
        this.hotels = response;
        this.objectForFilterArea = this.filterService.populateFilterArea(response)
      },
      )
  }

  getFilterData(event: any) {
    let baseUrl = 'api/Apartments/filter';
    let filteredParams = this.filterService.filterParams(event);
    
    if (filteredParams.length > 0) {
      baseUrl += '?' + filteredParams.join('&');
    }

    this.http.getData(baseUrl)
      .subscribe((response: any) => {
        this.hotels = response
      })
  }

  changeQueryParams(data: FilterModel) {
    const queryString = this.filterService.filterParams(data).join('&');
    const url = `/home${queryString ? `?${queryString}` : ''}`;

    this.router.navigateByUrl(url);
  }

}

