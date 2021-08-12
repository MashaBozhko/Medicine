import {NgModule} from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {ClinicAppointmentComponent} from './clinic-appointment.component';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoGeneraltestComponent } from './step-two-generaltest/step-two-generaltest.component';
import { StepTwoRecordComponent } from './step-two-record/step-two-record.component';
import { StepTwoSpectestComponent } from './step-two-spectest/step-two-spectest.component';




const routes: Routes = [
  { path: 'clinic-appointment', component: ClinicAppointmentComponent, children: [
    { path: 'step-one', component: StepOneComponent},
    { path: 'step-two-record', component: StepTwoRecordComponent},
    { path: 'step-two-generaltest', component: StepTwoGeneraltestComponent},
    { path: 'step-two-spectest', component: StepTwoSpectestComponent},
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClinicAppointmentRoutingModule { }
