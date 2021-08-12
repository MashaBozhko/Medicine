import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LocalityService {
  constructor(private http: HttpClient) {}

  getLocalitys() {
    return this.http
      .get<any>('../../../assets/locality.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => {
        return data;
      });
  }
}
