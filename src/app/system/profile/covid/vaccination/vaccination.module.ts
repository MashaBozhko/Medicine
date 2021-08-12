import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { VaccinationComponent } from './vaccination.component';
import { VaccinationRoutingModule } from './vaccination-routing.module';
import { InfoComponent } from './info/info.component';
import { VacStepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepFourComponent } from './step-four/step-four.component';
import { ResultComponent } from './result/result.component';


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
import {StepsModule} from 'primeng/steps';
import {MultiSelectModule} from 'primeng/multiselect';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    VaccinationRoutingModule,
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
    StepsModule,
    MultiSelectModule,
  ],
  declarations: [
   VaccinationComponent,
   InfoComponent,
   VacStepOneComponent,
   StepTwoComponent,
   StepThreeComponent,
   StepFourComponent,
   ResultComponent,
  ]
})

export class VaccinationModule { }
