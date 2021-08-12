import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClinicService } from '../services/clinic/clinic.service';
import { Clinic } from '../services/models/clinic.model';
import { PlacementService } from '../services/placement/placement.service';
import { WorkScheduleService } from '../services/work_schedule/work-schedule.service';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.scss']
})
export class ClinicComponent implements OnInit {


  c: Clinic = {placement: {country: {}, region: {}, city: {}, district:{}, street_type:{}}, 
  clinic_drive_map: {}}
  constructor(private clinicService: ClinicService, private placementService: PlacementService, 
   private http: HttpClient, private router: Router, private actRoute: ActivatedRoute) { }

   id: number;
  ngOnInit(): void {
    this.id = Number(localStorage.getItem('clinic_id'));

  }

  goToClinic(route: string){
    this.router.navigate(['', 'clinic', route, this.id]);
  }
}
