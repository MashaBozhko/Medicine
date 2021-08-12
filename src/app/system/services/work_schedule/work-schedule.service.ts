import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WorkSchedule } from '../models/work_schedule.model';

@Injectable({
  providedIn: 'root'
})
export class WorkScheduleService {

  constructor(private http: HttpClient) { }

   findOne(id: number)  {
   return this.http.get<any>(environment.API + '/get_work_schedule/' + id);
    
  }
}
