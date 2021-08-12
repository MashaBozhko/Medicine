import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CovidComponent } from './covid.component';
import { TestCovidComponent } from './test-covid/test-covid.component';
import {CovidRoutingModule} from './covid-routing.module';
import { ResultTestComponent } from './result-test/result-test.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { AntibodiesComponent } from './antibodies/antibodies.component';
import { PCRComponent } from './pcr/pcr.component';
import { SpecificTestComponent } from './specific-test/specific-test.component';
import { VaccinationModule } from './vaccination/vaccination.module';

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
    CovidRoutingModule,
    VaccinationModule,
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
    InputTextareaModule,
    AccordionModule,
    FormsModule,
    SelectButtonModule,
  ],
  declarations: [
   CovidComponent,
   TestCovidComponent,
   ResultTestComponent,
   QrCodeComponent,
   AntibodiesComponent,
   PCRComponent,
   SpecificTestComponent,
  ]
})

export class CovidModule { }
