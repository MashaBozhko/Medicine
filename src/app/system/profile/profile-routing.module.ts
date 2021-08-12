import {NgModule} from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile.component';
import {CommunicationComponent} from './communication/communication.component';
import {PersonalAreaComponent} from './personal-area/personal-area.component';
import {ReceptionsComponent} from './receptions/receptions.component';
import {MedicalCardComponent} from './medical-card/medical-card.component';
import {HealthDiaryComponent} from './health-diary/health-diary.component';
import {SanResortCardComponent} from './san-resort-card/san-resort-card.component';
import {CovidComponent} from './covid/covid.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {MyMapComponent} from './medical-card/my-map/my-map.component';
import {MyRecipesComponent} from './medical-card/my-recipes/my-recipes.component';
import {MyAnalyzesComponent } from './medical-card/my-analyzes/my-analyzes.component';
import {MyResearchComponent } from './medical-card/my-research/my-research.component';
import {MyDischargeComponent } from './medical-card/my-discharge/my-discharge.component';
import {MyVaccinationComponent } from './medical-card/my-vaccination/my-vaccination.component';
import {MyReferenceComponent } from './medical-card/my-reference/my-reference.component';
import {MyHospitalsComponent } from './medical-card/my-hospitals/my-hospitals.component';
import { TestCovidComponent } from './covid/test-covid/test-covid.component';
import { ResultTestComponent } from './covid/result-test/result-test.component';
import { VaccinationComponent } from './covid/vaccination/vaccination.component';
import { QrCodeComponent } from './covid/qr-code/qr-code.component';
import { AntibodiesComponent } from './covid/antibodies/antibodies.component';
import { PCRComponent } from './covid/pcr/pcr.component';
import { SpecificTestComponent } from './covid/specific-test/specific-test.component';
import { InfoComponent } from './covid/vaccination/info/info.component';
import { VacStepOneComponent } from './covid/vaccination/step-one/step-one.component';
import { StepTwoComponent } from './covid/vaccination/step-two/step-two.component';
import { StepThreeComponent } from './covid/vaccination/step-three/step-three.component';
import { StepFourComponent } from './covid/vaccination/step-four/step-four.component';
import { ResultComponent } from './covid/vaccination/result/result.component';


const routes: Routes = [
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
    ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfileRoutingModule { }
