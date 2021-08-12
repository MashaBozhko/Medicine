import {NgModule} from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {ClinicComponent} from './clinic.component';
import { OperatingModeComponent } from './operating-mode/operating-mode.component';
import { PolyclinicComponent } from './polyclinic/polyclinic.component';
import { AboutInstitutionComponent } from './about-institution/about-institution.component';
import { ClinicStaffComponent } from './clinic-staff/clinic-staff.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PaidServicesComponent } from './paid-services/paid-services.component';
import { HouseCallComponent } from './house-call/house-call.component';
import { VaccinationFormComponent } from './vaccination-form/vaccination-form.component';


const routes: Routes = [
  { path: 'clinic', component: ClinicComponent, children: [
    { path: 'polyclinic/:id', component: PolyclinicComponent},
    { path: 'operating-mode/:id', component: OperatingModeComponent},
    { path: 'about-institution/:id', component: AboutInstitutionComponent},
    { path: 'clinic-staff/:id', component: ClinicStaffComponent},
    { path: 'service-list/:id', component: ServiceListComponent},
    { path: 'paid-services/:id', component: PaidServicesComponent},
    { path: 'reviews/:id', component: ReviewsComponent},
    { path: 'house-call/:id', component: HouseCallComponent},
    { path: 'vaccination-form/:id', component: VaccinationFormComponent},
  ]},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClinicRoutingModule { }
