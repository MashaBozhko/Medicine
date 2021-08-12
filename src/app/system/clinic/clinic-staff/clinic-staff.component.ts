import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinic-staff',
  templateUrl: './clinic-staff.component.html',
  styleUrls: ['./clinic-staff.component.scss']
})
export class ClinicStaffComponent implements OnInit {

  constructor() { }
  dropdown_flag = false;
  ngOnInit(): void {
  }

  openSpecialization(){
    if(this.dropdown_flag === false){
      this.dropdown_flag = true;
    }
    else{
      this.dropdown_flag = false;
    }
  }
}
