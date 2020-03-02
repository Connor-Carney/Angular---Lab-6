import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DaataService {

  constructor(private http:HttpClient) { }

  GetStudentData():Observable<any> {
    return this.http.get('https://www.jsonblob.com/api/jsonblob/ad0bdd62-5ca0-11ea-b3a3-5f2f0f3203d5');
  }

  GetWeatherData():Observable<any> {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=4fabfd0caea5ad6efe6b6d00b2543b59');
  }
}
