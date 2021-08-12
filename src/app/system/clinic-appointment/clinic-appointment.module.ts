import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {ClinicAppointmentComponent} from './clinic-appointment.component';
import {ClinicAppointmentRoutingModule} from './clinic-appointment-routing.module';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoRecordComponent } from './step-two-record/step-two-record.component';
import { StepTwoGeneraltestComponent } from './step-two-generaltest/step-two-generaltest.component';
import { StepTwoSpectestComponent } from './step-two-spectest/step-two-spectest.component';

import {AutoCompleteModule} from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {SliderModule} from 'primeng/slider';
import {InputTextModule} from 'primeng/inputtext';
import {ChartModule} from 'primeng/chart';
import {OrderListModule} from 'primeng/orderlist';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {AccordionModule} from 'primeng/accordion';
import {FormsModule} from '@angular/forms';
import {SelectButtonModule} from 'primeng/selectbutton';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ClinicAppointmentRoutingModule,
    CalendarModule,
    AutoCompleteModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    SliderModule,
    InputTextModule,
    ChartModule,
    OrderListModule,
    DropdownModule,
    InputTextareaModule,
    AccordionModule,
    FormsModule,
    SelectButtonModule

  ],
  declarations: [
    ClinicAppointmentComponent,
    StepOneComponent,
    StepTwoRecordComponent,
    StepTwoGeneraltestComponent,
    StepTwoSpectestComponent,
  ]
})

export class ClinicAppointmentModule { }
