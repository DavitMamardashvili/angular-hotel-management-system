import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FilterService } from './service/filter.service';
import { combineLatest, delay, forkJoin, of, switchMap } from 'rxjs';
import { FilterModel } from './components/models/FilterModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  hotels: any[] = [];
  objectForFilterArea: any;
  obj: any;

  constructor(private http: HttpClient, private filterService: FilterService, private activatedRoute: ActivatedRoute , private router:Router) { }


  ngOnInit(): void {
    this.fetchHotels();
    const delayObservable = of(null).pipe(delay(500));
    delayObservable.pipe(
      switchMap(() => this.activatedRoute.queryParams)
    ).subscribe(params => {
      this.getFilterData(params);
    });
  }

  fetchHotels() {
    this.http.get('http://www.airbnb-digital-students.somee.com/get-all-hotels')
      .subscribe((response: any) => {
        this.hotels = response;
        this.objectForFilterArea = this.filterService.populateFilterArea(response);
      },
        (error) => {
          console.error('Error fetching hotels:', error);
        }
      );
  }

  getFilterData(event: any) {
    let baseUrl = 'http://www.airbnb-digital-students.somee.com/api/Apartments/filter';
    const filteredParams = Object.entries(event)
      .filter(([key, value]) => value !== undefined && value !== '')
      .map(([key, value]) => `${key}=${encodeURIComponent(value as string)}`);

    if (filteredParams.length > 0) {
      baseUrl += '?' + filteredParams.join('&');
    }

    this.http.get(baseUrl)
      .subscribe((response: any) => {
        this.hotels = response
      }, (error: any) => {
        console.error('Error occurred:', error);
      });
  }

  changeQueryParams(data:FilterModel) {
    const queryParams = Object.entries(data)
      .filter(([key, value]) => value !== undefined && value !== '')
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`);

    const queryString = queryParams.join('&');
    const url = `/home${queryString ? `?${queryString}` : ''}`;

    this.router.navigateByUrl(url);
  }

}

