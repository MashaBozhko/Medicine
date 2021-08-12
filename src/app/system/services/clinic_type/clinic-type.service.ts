import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClinicType } from '../models/clinic_type.model';
import { Placement } from '../models/placement.model';

@Injectable({
  providedIn: 'root'
})
export class ClinicTypeService {

  constructor(private http: HttpClient) { }

   findOne(id: number): Observable<any>  {  
    return this.http.get(environment.API +'/get_clinic_types/' + id);

  }

  find() {
    return this.http.get<any[]>(environment.API + '/get_clinic_types')
  }
}
