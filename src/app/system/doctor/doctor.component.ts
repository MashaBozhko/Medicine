import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ClinicService } from '../services/clinic/clinic.service';
import { DoctorService } from '../services/doctor/doctor.service';
import { Clinic } from '../services/models/clinic.model';
import { Doctor } from '../services/models/doctor.model';
import { PlacementService } from '../services/placement/placement.service';
import { WorkScheduleService } from '../services/work_schedule/work-schedule.service';
import { WorkTimeService } from '../services/work_time/work-time.service';
declare var ymaps: any;

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  myMap;
  clinic: Clinic = {placement: {country: {}, region: {}, city: {}, district:{}, street_type:{}}, 
  clinic_drive_map: {}, clinic_contacts: {}, clinic_type:{}}

  defaultBehavior: string[] = ["drag", "scrollZoom", "dblClickZoom", "multiTouch", "rightMouseButtonMagnifier"];
  element = document.getElementById("map");
  id: number;
  doc: Doctor;
  constructor(private doctorService: DoctorService, private workTimeService: WorkTimeService, private placementService: PlacementService,
    private scheduleService: WorkScheduleService, private router: Router, private http: HttpClient,
    private clinicService: ClinicService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(localStorage.getItem('doctor_id'));
    this.doc = {};
    this.http.get(environment.API +'/get_doctor/' + this.id).subscribe((data: any)=>{
      this.scheduleService.findOne(data.work_schedule_id).subscribe((obj: any)=> {
        this.doc.work_schedule = obj.items[0];
        this.workTimeService.findOne(obj.items[0].id).subscribe((obj: any)=>{
          this.doc.work_schedule.work_time = obj.items;
          for(let i = 0; i < this.doc.work_schedule.work_time.length; i++ ){
            this.doc.work_schedule.work_time[i].time_start= this.doc.work_schedule.work_time[i].time_start.substr(17, 5);
            this.doc.work_schedule.work_time[i].time_end = this.doc.work_schedule.work_time[i].time_end.substr(17,5);
          }
        })
      })
      this.doc.id = data.id;
      this.doc.first_name = data.first_name;
      this.doc.last_name = data.last_name;
      this.doc.patronymic = data.patronymic;
      this.doc.work_phone = data.work_phone;
      this.doc.post = data.post;
      this.doc.work_experience = data.work_experience;
      this.doc.image_url = data.image_url;
      
      this.clinicService.findOne(data.clinic_id).subscribe((obj: any)=>{
        console.log('response: ', obj.items[0]);
  
        this.clinic.id = obj.items[0].id;
        this.clinic.name = obj.items[0].name;
        this.clinic.email = obj.items[0].email;
        this.clinic.rating = obj.items[0].rating;
        this.clinic.reviews_count = obj.items[0].reviews_count;
  
        this.placementService.findOne(obj.items[0].placement_id).subscribe((place)=>{
          this.clinic.placement.id = place.items[0].id;
          this.clinic.placement.index = place.items[0].index;
          this.clinic.placement.home = place.items[0].home;
          this.clinic.placement.street = place.items[0].street;
          this.clinic.placement.room = place.items[0].room;
          this.clinic.placement.coordinate_latitude = place.items[0].coordinate_latitude;
          this.clinic.placement.coordinate_longitude = place.items[0].coordinate_longitude;
          ymaps.ready(this.init(this.clinic.placement.coordinate_latitude, this.clinic.placement.coordinate_longitude));
  
          this.http.get<any>(environment.API + '/get_countries/' + place.items[0].country_id).subscribe((obj: any) => {
            this.clinic.placement.country = obj.items[0];
          })
          
          this.http.get<any>(environment.API + '/get_cities/' + place.items[0].city_id).subscribe((obj: any) => {
            this.clinic.placement.city = obj.items[0];
          })
          
          this.http.get<any>(environment.API + '/get_districts/' + place.items[0].district_id).subscribe((obj: any) => {
            this.clinic.placement.district = obj.items[0];
          })
          
          this.http.get<any>(environment.API + '/get_regions/' + place.items[0].region_id).subscribe((obj: any) => {
            this.clinic.placement.region = obj.items[0];
          })
          
          this.http.get<any>(environment.API + '/get_street_type/' + place.items[0].street_type_id).subscribe((obj: any) => {
            this.clinic.placement.street_type = obj.items[0];
          })
          this.http.get<any>(environment.API + '/get_clinic_contacts/' + obj.items[0].clinic_contacts_id).subscribe((obj: any) => {
            this.clinic.clinic_contacts = obj.items[0];
          })
        })
      })

    })



  }

  init (latitude: number, longtitude: number) {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    this.myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [latitude, longtitude], // Москва
        zoom: 18
    }, {
        searchControlProvider: 'yandex#search'
    });

  }

}
