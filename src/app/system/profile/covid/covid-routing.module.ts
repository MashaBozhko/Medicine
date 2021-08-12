import {NgModule} from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { CovidComponent } from './covid.component';
import { TestCovidComponent } from './test-covid/test-covid.component';
import { ResultTestComponent } from './result-test/result-test.component';
import { VaccinationComponent } from './vaccination/vaccination.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { AntibodiesComponent } from './antibodies/antibodies.component';
import { PCRComponent } from './pcr/pcr.component';
import { SpecificTestComponent } from './specific-test/specific-test.component';
import { InfoComponent } from './vaccination/info/info.component';
import { VacStepOneComponent } from './vaccination/step-one/step-one.component';
import { StepTwoComponent } from './vaccination/step-two/step-two.component';
import { StepThreeComponent } from './vaccination/step-three/step-three.component';
import { StepFourComponent } from './vaccination/step-four/step-four.component';
import { ResultComponent } from './vaccination/result/result.component';



const routes: Routes = [
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
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CovidRoutingModule { }
