import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SystemComponent} from './system.component';
import {SelfDiagnosticsComponent} from './self-diagnostics/self-diagnostics.component';
import {RecordingComponent} from './recording/recording.component';
import {DiagnosticsComponent} from './diagnostics/diagnostics.component';
import {DoctorsComponent} from './doctors/doctors.component';
import {MainComponent} from './main/main.component';
import {DoctorComponent} from './doctor/doctor.component';
import { TypeVisitComponent } from './recording/type-visit/type-visit.component';
import { QuestioningComponent } from './recording/questioning/questioning.component';
import { AppointmentComponent } from './recording/appointment/appointment.component';
import { SpecializedQuestionnaireComponent } from './specialized-questionnaire/specialized-questionnaire.component';
import { OnkoriskComponent } from './onkorisk/onkorisk.component';
import { AnalyzesComponent } from './analyzes/analyzes.component';
import { GeneralTestComponent } from './general-test/general-test.component';
import { SurveysComponent } from './surveys/surveys.component';
import {ProfileComponent} from './profile/profile.component';
import {PersonalAreaComponent} from './profile/personal-area/personal-area.component';
import {CommunicationComponent} from './profile/communication/communication.component';
import {ReceptionsComponent} from './profile/receptions/receptions.component';
import {MedicalCardComponent} from './profile/medical-card/medical-card.component';
import {HealthDiaryComponent} from './profile/health-diary/health-diary.component';
import {SanResortCardComponent} from './profile/san-resort-card/san-resort-card.component';
import {CovidComponent} from './profile/covid/covid.component';
import {NotificationsComponent} from './profile/notifications/notifications.component';
import {MyMapComponent} from './profile/medical-card/my-map/my-map.component';
import {MyRecipesComponent} from './profile/medical-card/my-recipes/my-recipes.component';
import {MyAnalyzesComponent } from './profile/medical-card/my-analyzes/my-analyzes.component';
import {MyResearchComponent } from './profile/medical-card/my-research/my-research.component';
import {MyDischargeComponent } from './profile/medical-card/my-discharge/my-discharge.component';
import {MyVaccinationComponent } from './profile/medical-card/my-vaccination/my-vaccination.component';
import {MyReferenceComponent } from './profile/medical-card/my-reference/my-reference.component';
import {MyHospitalsComponent } from './profile/medical-card/my-hospitals/my-hospitals.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { ClinicComponent } from './clinic/clinic.component';
import { PolyclinicComponent } from './clinic/polyclinic/polyclinic.component';
import { OperatingModeComponent } from './clinic/operating-mode/operating-mode.component';
import { AboutInstitutionComponent } from './clinic/about-institution/about-institution.component';
import { ClinicStaffComponent } from './clinic/clinic-staff/clinic-staff.component';
import { ServiceListComponent } from './clinic/service-list/service-list.component';
import { ReviewsComponent } from './clinic/reviews/reviews.component';
import { MedicalCertificatesComponent } from './clinic/medical-certificates/medical-certificates.component';
import { PaidServicesComponent } from './clinic/paid-services/paid-services.component';
import { ExaminationComponent } from './examination/examination.component';
import { ClinicAppointmentComponent } from './clinic-appointment/clinic-appointment.component';
import { StepOneComponent } from './clinic-appointment/step-one/step-one.component';
import { StepTwoRecordComponent } from './clinic-appointment/step-two-record/step-two-record.component';
import { StepTwoGeneraltestComponent } from './clinic-appointment/step-two-generaltest/step-two-generaltest.component';
import { StepTwoSpectestComponent } from './clinic-appointment/step-two-spectest/step-two-spectest.component';
import { TestCovidComponent } from './profile/covid/test-covid/test-covid.component';
import { ResultTestComponent } from './profile/covid/result-test/result-test.component';
import { VaccinationComponent } from './profile/covid/vaccination/vaccination.component';
import { QrCodeComponent } from './profile/covid/qr-code/qr-code.component';
import { AntibodiesComponent } from './profile/covid/antibodies/antibodies.component';
import { PCRComponent } from './profile/covid/pcr/pcr.component';
import { SpecificTestComponent } from './profile/covid/specific-test/specific-test.component';
import { MainNewsComponent } from './main-news/main-news.component';
import { MainNewComponent } from './main-new/main-new.component';
import { WorksheetComponent } from './worksheet/worksheet.component';
import { WorksheetResultComponent } from './worksheet-result/worksheet-result.component';
import { HouseCallComponent } from './clinic/house-call/house-call.component';
import { VaccinationFormComponent } from './clinic/vaccination-form/vaccination-form.component';
import { InfoComponent } from './profile/covid/vaccination/info/info.component';
import { ResultComponent } from './profile/covid/vaccination/result/result.component';
import { VacStepOneComponent } from './profile/covid/vaccination/step-one/step-one.component';
import { StepFourComponent } from './profile/covid/vaccination/step-four/step-four.component';
import { StepThreeComponent } from './profile/covid/vaccination/step-three/step-three.component';
import { StepTwoComponent } from './profile/covid/vaccination/step-two/step-two.component';


const routes: Routes = [
  { path: '', component: SystemComponent, children: [
    {path: 'self-diagnostics', component: SelfDiagnosticsComponent},
    { path: 'recording', component: RecordingComponent, children: [
        {path: 'type-visit', component: TypeVisitComponent},
        {path: 'questioning', component: QuestioningComponent},
        {path: 'appointment', component: AppointmentComponent},
      ]},
    {path: 'diagnostics', component: DiagnosticsComponent},
    {path: 'doctors', component: DoctorsComponent},
    {path: 'main', component: MainComponent},
    {path: 'main-news', component: MainNewsComponent},
    {path: 'main-new', component: MainNewComponent},
    {path: 'worksheet', component: WorksheetComponent},
    {path: 'worksheet-result', component: WorksheetResultComponent},
    {path: 'doctor/:id', component: DoctorComponent},
    {path: 'onkorisk', component: OnkoriskComponent},
    {path: 'specialized-questionnaire', component: SpecializedQuestionnaireComponent },
    {path: 'general-test', component: GeneralTestComponent},
    {path: 'analyzes', component: AnalyzesComponent},
    {path: 'surveys', component: SurveysComponent},
    { path: 'profile', component: ProfileComponent, children: [
        {path: 'personal-area', component: PersonalAreaComponent},
        {path: 'communication', component: CommunicationComponent},
        {path: 'receptions', component: ReceptionsComponent},
        { path: 'medical-card', component: MedicalCardComponent, children: [
          {path: 'my-map', component: MyMapComponent},
          {path: 'my-recipes', component: MyRecipesComponent},
          {path: 'my-analyzes', component: MyAnalyzesComponent},
          {path: 'my-research', component: MyResearchComponent},
          {path: 'my-discharge', component: MyDischargeComponent},
          {path: 'my-vaccination', component: MyVaccinationComponent},
          {path: 'my-reference', component: MyReferenceComponent},
          {path: 'my-hospitals', component: MyHospitalsComponent},
          ]},
        {path: 'health-diary', component: HealthDiaryComponent},
        {path: 'san-resort-card', component: SanResortCardComponent},
        { path: 'covid', component: CovidComponent, children: [
          { path: 'test-covid', component: TestCovidComponent},
          { path: 'result-test', component: ResultTestComponent},
          { path: 'vaccination', component: VaccinationComponent, children: [
            { path: 'info', component: InfoComponent},
            { path: 'vaccination-step-one', component: VacStepOneComponent},
            { path: 'vaccination-step-two', component: StepTwoComponent},
            { path: 'vaccination-step-three', component: StepThreeComponent},
            { path: 'vaccination-step-four', component: StepFourComponent},
            { path: 'result', component: ResultComponent},
          ]},
          { path: 'qr-code', component: QrCodeComponent},
          { path: 'antibodies', component: AntibodiesComponent},
          { path: 'pcr', component: PCRComponent},
          { path: 'specific-test', component: SpecificTestComponent},
        ]},
        {path: 'notifications', component: NotificationsComponent},
    ]},
    {path: 'clinics', component: ClinicsComponent},
    {path: 'clinic', component: ClinicComponent, children: [
      {path: 'polyclinic/:id', component: PolyclinicComponent},
      { path: 'operating-mode/:id', component: OperatingModeComponent},
      { path: 'about-institution/:id', component: AboutInstitutionComponent},
      { path: 'clinic-staff/:id', component: ClinicStaffComponent},
      { path: 'reviews/:id', component: ReviewsComponent},
      { path: 'medical-certificates/:id', component: MedicalCertificatesComponent},
      { path: 'service-list/:id', component: ServiceListComponent},
      { path: 'paid-services/:id', component: PaidServicesComponent},
      { path: 'house-call/:id', component: HouseCallComponent},
      { path: 'vaccination-form/:id', component: VaccinationFormComponent},
    ]},
    {path: 'examination', component: ExaminationComponent},
    { path: 'clinic-appointment', component: ClinicAppointmentComponent, children: [
      { path: 'step-one', component: StepOneComponent},
      { path: 'step-two-record', component: StepTwoRecordComponent},
      { path: 'step-two-generaltest', component: StepTwoGeneraltestComponent},
      { path: 'step-two-spectest', component: StepTwoSpectestComponent},
    ]},
  ]} ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule { }
