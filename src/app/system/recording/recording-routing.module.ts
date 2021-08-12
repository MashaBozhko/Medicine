import {NgModule} from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {RecordingComponent} from './recording.component';
import {TypeVisitComponent} from './type-visit/type-visit.component';
import {QuestioningComponent} from './questioning/questioning.component';
import {AppointmentComponent} from './appointment/appointment.component';



const routes: Routes = [
  { path: 'recording', component: RecordingComponent, children: [
      {path: 'type-visit', component: TypeVisitComponent},
      {path: 'questioning', component: QuestioningComponent},
      {path: 'appointment', component: AppointmentComponent},
    ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RecordingRoutingModule { }
