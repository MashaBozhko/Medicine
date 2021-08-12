import {NgModule} from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { VaccinationComponent } from './vaccination.component';
import { InfoComponent } from './info/info.component';
import { VacStepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepFourComponent } from './step-four/step-four.component';
import { ResultComponent } from './result/result.component';



const routes: Routes = [
  { path: 'vaccination', component: VaccinationComponent, children: [
    { path: 'info', component: InfoComponent},
    { path: 'vaccination-step-one', component: VacStepOneComponent},
    { path: 'vaccination-step-two', component: StepTwoComponent},
    { path: 'vaccination-step-three', component: StepThreeComponent},
    { path: 'vaccination-step-four', component: StepFourComponent},
    { path: 'result', component: ResultComponent},
  ]},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VaccinationRoutingModule { }
