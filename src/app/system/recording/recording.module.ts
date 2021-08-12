import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {RecordingComponent} from './recording.component';
import {AppointmentComponent} from './appointment/appointment.component';
import {QuestioningComponent} from './questioning/questioning.component';
import {RecordingRoutingModule} from './recording-routing.module';
import {TypeVisitComponent} from './type-visit/type-visit.component';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RecordingRoutingModule,
    CalendarModule

  ],
  declarations: [
   RecordingComponent,
    AppointmentComponent,
    QuestioningComponent,
    TypeVisitComponent
  ]
})

export class RecordingModule { }
