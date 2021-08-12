import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PolyclinicService {
  constructor(private http: HttpClient) {}

  getPolyclinics() {
    return this.http
      .get<any>('../../../assets/polyclinic.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => {
        return data;
      });
  }
}
