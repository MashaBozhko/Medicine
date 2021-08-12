import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule } from '@angular/platform-browser';
import {ClinicComponent} from './clinic.component';
import {ClinicRoutingModule} from './clinic-routing.module';
import { PolyclinicComponent } from './polyclinic/polyclinic.component';
import { OperatingModeComponent } from './operating-mode/operating-mode.component';
import { AboutInstitutionComponent } from './about-institution/about-institution.component';
import { ClinicStaffComponent } from './clinic-staff/clinic-staff.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { PaidServicesComponent } from './paid-services/paid-services.component';
import { HouseCallComponent } from './house-call/house-call.component';
import { VaccinationFormComponent } from './vaccination-form/vaccination-form.component';

import {GMapModule} from 'primeng/gmap';
import { CalendarModule } from 'primeng/calendar';
import {AutoCompleteModule} from 'primeng/autocomplete';
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
    ClinicRoutingModule,
    InputTextareaModule,
    AccordionModule,
    GMapModule,
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
    FormsModule,
    SelectButtonModule,
  ],
  declarations: [
   ClinicComponent,
   PolyclinicComponent,
   OperatingModeComponent,
   AboutInstitutionComponent,
   ClinicStaffComponent,
   ReviewsComponent,
   ServiceListComponent,
   PaidServicesComponent,
   HouseCallComponent,
   VaccinationFormComponent
  ]
})

export class ClinicModule { }

