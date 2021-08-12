import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClinicTypeService } from '../clinic_type/clinic-type.service';
import { Clinic } from '../models/clinic.model';
import { ClinicType } from '../models/clinic_type.model';
import { WorkSchedule } from '../models/work_schedule.model';
import { PlacementService } from '../placement/placement.service';
import { WorkScheduleService } from '../work_schedule/work-schedule.service';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {
  
  constructor(private http: HttpClient, private placementService: PlacementService, 
    private typeService: ClinicTypeService,
    private scheduleService: WorkScheduleService) { }


   findOne(id: number)  {
    return this.http.get( environment.API + '/get_clinics/' + id);
      
   }
 
   find() {
     return this.http.get<any>( environment.API + '/get_clinics')
   }
}
