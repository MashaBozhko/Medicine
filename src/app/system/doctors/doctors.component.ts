import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ClinicType } from '../services/models/clinic_type.model';
import { District } from '../services/models/district.model';
import { Doctor } from '../services/models/doctor.model';
import { WorkScheduleService } from '../services/work_schedule/work-schedule.service';
import { WorkTimeService } from '../services/work_time/work-time.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit {
  constructor(private http: HttpClient, private workTimeService: WorkTimeService,
    private scheduleService: WorkScheduleService, private router: Router) {}
  doctors: Doctor[];
  clinic_types: ClinicType[];
  clinic_districts: District[];
  selectedClinicType: ClinicType;
  selectedDistrict: District;

  sortOrder: number;

  sortField: string;

  dropdown_flag = false;
  ngOnInit(): void {
    this.http.get(environment.API + '/get_doctors').subscribe((data: any)=>{
      this.doctors = [];
      for(let i = 0; i < data.items.length; i++){
      let doc: Doctor = {};
      this.scheduleService.findOne(data.items[i].work_schedule_id).subscribe((obj: any)=> {
        doc.work_schedule = obj.items[0];
        this.workTimeService.findOne(obj.items[0].id).subscribe((obj: any)=>{
          doc.work_schedule.work_time = obj.items;
          for(let i = 0; i < doc.work_schedule.work_time.length; i++ ){
            doc.work_schedule.work_time[i].time_start= doc.work_schedule.work_time[i].time_start.substr(17, 5);
            doc.work_schedule.work_time[i].time_end = doc.work_schedule.work_time[i].time_end.substr(17,5);
          }
        })
      })
      doc.id = data.items[i].id;
      doc.first_name = data.items[i].first_name;
      doc.last_name = data.items[i].last_name;
      doc.patronymic = data.items[i].patronymic;
      doc.work_phone = data.items[i].work_phone;
      doc.post = data.items[i].post;
      doc.work_experience = data.items[i].work_experience;
      doc.image_url = data.items[i].image_url;
      

      this.doctors.push(doc);

      }

      

      console.log(this.doctors);
    })
  }

  openSpecialization(){
    if(this.dropdown_flag === false){
      this.dropdown_flag = true;
    }
    else{
      this.dropdown_flag = false;
    }
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
  }

  goToDoctor(id: number){
    this.router.navigate(['', 'doctor', id]);
    localStorage.setItem('doctor_id', id.toString());
  }

}
