import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
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

  fetchUnsplashImages(hotel: any, count: number) {
    const apiKey = 'NVm0woD0X5eU_DCxPFK0_3WcyyVZajPKKlW4-_u548Q';
    const apiUrl = `https://api.unsplash.com/photos/random?count=${count}&client_id=${apiKey}`;
    return this.http.get(apiUrl).pipe(
      map((response: any) => {
        const unsplashImages = response.map((image: any) => ({
          url: image.urls.regular,
        }));
        hotel.images = [...hotel.images, ...unsplashImages];
      })
    );
  }
}
