import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private http: HttpClient) { }

  get_covid(){
    const rezalt = this.http.get(environment.API + '/get_covid');
    return rezalt;
  }

  get_news(){
    const rezalt = this.http.get(environment.API + '/get_news');
    return rezalt;
  }
}
