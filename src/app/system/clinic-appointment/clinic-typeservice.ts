import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ClinicTypeService {
  constructor(private http: HttpClient) {}

  getClinics() {
    return this.http
      .get<any>('../../../assets/clinic-type.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => {
        return data;
      });
  }
}
