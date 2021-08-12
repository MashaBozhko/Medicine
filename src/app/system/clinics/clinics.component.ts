import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../services/clinic/clinic.service';
import { ClinicTypeService } from '../services/clinic_type/clinic-type.service';
import { Clinic, ClinicResponse } from '../services/models/clinic.model';
import { PlacementService } from '../services/placement/placement.service';
import { WorkScheduleService } from '../services/work_schedule/work-schedule.service';
import { ClinicDriveMap } from '../services/models/clinic_drive_map.model';
import { WorkTimeService } from '../services/work_time/work-time.service';
import { Router } from '@angular/router';
import { ClinicType } from '../services/models/clinic_type.model';
import { District } from '../services/models/district.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.scss']
})
export class ClinicsComponent implements OnInit {

  c: Clinic = {placement: {country: {}, region: {}, city: {}, district:{}, street_type:{}}, 
  clinic_drive_map: {}, clinic_contacts: {}, clinic_type:{}}
  
  clinic_types: ClinicType[];
  clinic_districts: District[];
  selectedClinicType: ClinicType;
  selectedDistrict: District;

  clinics_array: Clinic[] = [];

  sortOrder: number;

  sortField: string;

  constructor(private clinicService: ClinicService, private placementService: PlacementService, 
    private typeService: ClinicTypeService, private workTimeService: WorkTimeService,
    private scheduleService: WorkScheduleService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.clinicService.find().subscribe((obj: any)=>{
      this.clinics_array = [];
      console.log(obj.items);
      for(let i = 0; i < obj.items.length; i++){

        this.c = {placement: {country: {}, region: {}, city: {}, district:{}, street_type:{}}, 
        clinic_drive_map: {}, clinic_contacts: {}, clinic_type:{}};

        this.placementService.findOne(obj.items[i].placement_id).subscribe((place)=>{
          console.log(i)
          this.c.placement.id = place.items[0].id;
          this.c.placement.index = place.items[0].index;
          this.c.placement.home = place.items[0].home;
          this.c.placement.street = place.items[0].street;
          this.c.placement.room = place.items[0].room;
          this.c.placement.coordinate_latitude = place.items[0].coordinate_latitude;
          this.c.placement.coordinate_longitude = place.items[0].coordinate_longitude;
    
          this.http.get<any>(environment.API + '/get_countries/' + place.items[0].country_id).subscribe((obj: any) => {
            this.c.placement.country = obj.items[0];
          })
          
          this.http.get<any>(environment.API + '/get_cities/' + place.items[0].city_id).subscribe((obj: any) => {
            this.c.placement.city = obj.items[0];
          })
          
          this.http.get<any>(environment.API + '/get_districts/' + place.items[0].district_id).subscribe((obj: any) => {
            this.c.placement.district = obj.items[0];
          })
          
          this.http.get<any>(environment.API + '/get_regions/' + place.items[0].region_id).subscribe((obj: any) => {
            this.c.placement.region = obj.items[0];
          })
          
          this.http.get<any>(environment.API + '/get_street_type/' + place.items[0].street_type_id).subscribe((obj: any) => {
            this.c.placement.street_type = obj.items[0];
          })
        })
    
        this.http.get<any>(environment.API + '/get_clinic_contacts/' + obj.items[i].clinic_contacts_id).subscribe((obj: any) => {
          this.c.clinic_contacts = obj.items[0];
        })
        this.http.get<any>(environment.API + '/get_clinic_types/' + obj.items[i].clinic_type_id).subscribe((obj: any) => {
          this.c.clinic_type = obj.items[0];
        })

        this.scheduleService.findOne(obj.items[i].work_schedule_id).subscribe((obj: any)=> {
          this.c.work_schedule = obj.items[0];

          this.workTimeService.findOne(obj.items[0].id).subscribe((obj: any)=>{
            this.c.work_schedule.work_time = obj.items;
            for(let i = 0; i < this.c.work_schedule.work_time.length; i++ ){
              this.c.work_schedule.work_time[i].time_start= this.c.work_schedule.work_time[i].time_start.substr(17, 5);
              this.c.work_schedule.work_time[i].time_end = this.c.work_schedule.work_time[i].time_end.substr(17,5);
            }
          })
        })

        this.c.id = obj.items[i].id;
        this.c.name = obj.items[i].name;
        this.c.email = obj.items[i].email;
        this.c.rating = obj.items[i].rating;
        this.c.reviews_count = obj.items[i].reviews_count;
  
        if(i == 0){
          this.placementService.findOne(obj.items[0].placement_id).subscribe((place)=>{
             this.clinics_array[0].placement.index = place.items[0].index;
             this.clinics_array[0].placement.home = place.items[0].home;
             this.clinics_array[0].placement.street = place.items[0].street;
             this.clinics_array[0].placement.room = place.items[0].room;
             this.clinics_array[0].placement.coordinate_latitude = place.items[0].coordinate_latitude;
             this.clinics_array[0].placement.coordinate_longitude = place.items[0].coordinate_longitude;
      
            this.http.get<any>(environment.API + '/get_countries/' + place.items[0].country_id).subscribe((obj: any) => {
               this.clinics_array[0].placement.country = obj.items[0];
            })
            
            this.http.get<any>(environment.API + '/get_cities/' + place.items[0].city_id).subscribe((obj: any) => {
               this.clinics_array[0].placement.city = obj.items[0];
            })
            
            this.http.get<any>(environment.API + '/get_districts/' + place.items[0].district_id).subscribe((obj: any) => {
               this.clinics_array[0].placement.district = obj.items[0];
            })
            
            this.http.get<any>(environment.API + '/get_regions/' + place.items[0].region_id).subscribe((obj: any) => {
               this.clinics_array[0].placement.region = obj.items[0];
            })

            this.scheduleService.findOne(obj.items[0].work_schedule_id).subscribe((obj: any)=> {
              this.clinics_array[0].work_schedule = obj.items[0];
              this.workTimeService.findOne(obj.items[0].id).subscribe((obj: any)=>{
                this.clinics_array[0].work_schedule.work_time = obj.items;
                for(let i = 0; i < this.clinics_array[0].work_schedule.work_time.length; i++ ){
                  this.clinics_array[0].work_schedule.work_time[i].time_start= this.clinics_array[0].work_schedule.work_time[i].time_start.substr(17, 5);
                  this.clinics_array[0].work_schedule.work_time[i].time_end = this.clinics_array[0].work_schedule.work_time[i].time_end.substr(17,5);
                }
              })
            })
            
            this.http.get<any>(environment.API + '/get_street_type/' + place.items[0].street_type_id).subscribe((obj: any) => {
               this.clinics_array[0].placement.street_type = obj.items[0];
            })
          })
      
          this.http.get<any>(environment.API + '/get_clinic_contacts/' + obj.items[0].clinic_contacts_id).subscribe((obj: any) => {
             this.clinics_array[0].clinic_contacts = obj.items[0];
          })
          this.typeService.findOne(obj.items[0].clinic_type_id).subscribe((obj: any) => {
             this.clinics_array[0].clinic_type = obj.items[0];
          })       

        }

        this.clinics_array.push(this.c);
        
        this.typeService.find().subscribe((data:any)=>{
          this.clinic_types = data.items;
        })

         this.http.get<any>(environment.API + '/get_districts').subscribe((obj: any) => {
          this.clinic_districts = obj.items;
        })
    
      }   

      console.log(this.clinics_array);
    })   

  }


  goToClinic(id: number){
    this.router.navigate(['', 'clinic', 'polyclinic', id]);
    localStorage.setItem('clinic_id', id.toString());
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

  

}
