import {NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {SystemComponent} from './system.component';
import {SystemRoutingModule} from './system-routing.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';
import { SelfDiagnosticsComponent } from './self-diagnostics/self-diagnostics.component';
import { MainComponent } from './main/main.component';
import { DoctorComponent } from './doctor/doctor.component';
import { RecordingModule } from './recording/recording.module';
import { OnkoriskComponent } from './onkorisk/onkorisk.component';
import { SpecializedQuestionnaireComponent } from './specialized-questionnaire/specialized-questionnaire.component';
import { GeneralTestComponent } from './general-test/general-test.component';
import { SurveysComponent } from './surveys/surveys.component';
import { AnalyzesComponent } from './analyzes/analyzes.component';
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
import {DataViewModule} from 'primeng/dataview';

import localeRu from '@angular/common/locales/ru';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ProfileModule} from './profile/profile.module';
import { ClinicsComponent } from './clinics/clinics.component';
import { ClinicModule } from './clinic/clinic.module';
import { ExaminationComponent } from './examination/examination.component';;
import { ClinicAppointmentModule } from './clinic-appointment/clinic-appointment.module';
import { MainNewsComponent } from './main-news/main-news.component';
import { MainNewComponent } from './main-new/main-new.component';
import { WorksheetComponent } from './worksheet/worksheet.component';
import { WorksheetResultComponent } from './worksheet-result/worksheet-result.component';
import {DialogModule} from 'primeng/dialog';
import { ScrollTopComponent } from './shared/components/scroll-top/scroll-top.component';


registerLocaleData(localeRu, 'ru');

@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    RecordingModule,
    CalendarModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    SliderModule,
    InputTextModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ChartModule,
    ProfileModule,
    OrderListModule,
    ClinicModule,
    DropdownModule,
    InputTextareaModule,
    AccordionModule,
    ClinicAppointmentModule,
    DialogModule,
    DataViewModule
  ],

  declarations: [
    SystemComponent,
    HeaderComponent,
    FooterComponent,
    ScrollTopComponent,
    DoctorsComponent,
    DiagnosticsComponent,
    SelfDiagnosticsComponent,
    MainComponent,
    DoctorComponent,
    OnkoriskComponent,
    SpecializedQuestionnaireComponent,
    GeneralTestComponent,
    AnalyzesComponent,
    SurveysComponent,
    ClinicsComponent,
    ExaminationComponent,
    MainNewsComponent,
    MainNewComponent,
    WorksheetComponent,
    WorksheetResultComponent,
  ],
  providers: []
})
export class SystemModule { }
