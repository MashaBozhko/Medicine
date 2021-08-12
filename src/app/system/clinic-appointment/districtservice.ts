import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DistrictService {
  constructor(private http: HttpClient) {}

  getDistricts() {
    return this.http
      .get<any>('../../../assets/district.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => {
        return data;
      });
  }
}
