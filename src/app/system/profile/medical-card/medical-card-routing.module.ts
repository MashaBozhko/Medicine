import {NgModule} from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {MedicalCardComponent} from './medical-card.component';
import {MyMapComponent} from './my-map/my-map.component';
import {MyRecipesComponent} from './my-recipes/my-recipes.component';
import {MyAnalyzesComponent } from './my-analyzes/my-analyzes.component';
import {MyResearchComponent } from './my-research/my-research.component';
import {MyDischargeComponent } from './my-discharge/my-discharge.component';
import {MyVaccinationComponent } from './my-vaccination/my-vaccination.component';
import {MyReferenceComponent } from './my-reference/my-reference.component';
import {MyHospitalsComponent } from './my-hospitals/my-hospitals.component';


const routes: Routes = [
  { path: 'medical-card', component: MedicalCardComponent, children: [
      {path: 'my-map', component: MyMapComponent},
      {path: 'my-recipes', component: MyRecipesComponent},
      {path: 'my-analyzes', component: MyAnalyzesComponent},
      {path: 'my-research', component: MyResearchComponent},
      {path: 'my-discharge', component: MyDischargeComponent},
      {path: 'my-vaccination', component: MyVaccinationComponent},
      {path: 'my-reference', component: MyReferenceComponent},
      {path: 'my-hospitals', component: MyHospitalsComponent},
    ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MedicalCardRoutingModule { }
