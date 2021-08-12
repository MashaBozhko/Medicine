import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ClinicDepartment } from '../../services/models/clinic_department.model';
import { ClinicDocuments } from '../../services/models/clinic_documents';

@Component({
  selector: 'app-about-institution',
  templateUrl: './about-institution.component.html',
  styleUrls: ['./about-institution.component.scss']
})
export class AboutInstitutionComponent implements OnInit {

  clinic_id: number;
  departments: ClinicDepartment[];
  documents: ClinicDocuments[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.clinic_id = Number(localStorage.getItem('clinic_id'));
    this.http.get(environment.API + '/get_clinic_departments/' + this.clinic_id).subscribe((data: any) =>{
      console.log(data.items);
      
      this.departments = data.items;
      for(let i =0; i < data.items.length; i++){
        let str = data.items[i].description.split(';');
        this.departments[i].description = str;
        console.log(this.departments[i].description );
      }
    })
    this.http.get(environment.API + '/get_clinic_documents/' + this.clinic_id).subscribe((data: any) =>{
      this.documents = data.items;
      
    })
  }

}
