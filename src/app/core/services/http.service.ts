import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envoerment } from '../../../envoerment/envoerment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http: HttpClient) { }

  getData(url: string): Observable<any> {
    return this.http.get(`${envoerment.baseApiUrl}/${url}`);
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(`${envoerment.baseApiUrl}/${url}`, data);
  }

  putData(url: string, data: any): Observable<any> {
    return this.http.put(`${envoerment.baseApiUrl}/${url}`, data);
  }

  deleteData(url: string): Observable<any> {
    return this.http.delete(`${envoerment.baseApiUrl}/${url}`);
  }
}
