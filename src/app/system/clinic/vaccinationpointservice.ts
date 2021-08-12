import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class VaccinationPointService {
  constructor(private http: HttpClient) {}

  getVaccinationPoints() {
    return this.http
      .get<any>('../../../assets/vaccinationpoint.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => {
        return data;
      });
  }
}
