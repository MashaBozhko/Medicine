import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class VaccinationService {
  constructor(private http: HttpClient) {}

  getVaccinations() {
    return this.http
      .get<any>('../../../assets/vaccination.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => {
        return data;
      });
  }
}
