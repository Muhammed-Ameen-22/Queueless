import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private apiUrl = 'https://indian-cities-api-nocbegfhqg.now.sh/cities';

  constructor(private http: HttpClient) {}

  // getAllCities(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }
}