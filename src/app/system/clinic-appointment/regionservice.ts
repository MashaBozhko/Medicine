import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RegionService {
  constructor(private http: HttpClient) {}

  getRegions() {
    return this.http
      .get<any>('../../../assets/region.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => {
        return data;
      });
  }
}
