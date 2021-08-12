import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {MedicalCardComponent} from './medical-card.component';
import { MyMapComponent } from './my-map/my-map.component';
import {MedicalCardRoutingModule} from './medical-card-routing.module';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { MyAnalyzesComponent } from './my-analyzes/my-analyzes.component';
import { MyResearchComponent } from './my-research/my-research.component';
import { MyDischargeComponent } from './my-discharge/my-discharge.component';
import { MyVaccinationComponent } from './my-vaccination/my-vaccination.component';
import { MyReferenceComponent } from './my-reference/my-reference.component';
import { MyHospitalsComponent } from './my-hospitals/my-hospitals.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MedicalCardRoutingModule
  ],
  declarations: [
   MedicalCardComponent,
   MyMapComponent,
   MyRecipesComponent,
   MyAnalyzesComponent,
   MyResearchComponent,
   MyDischargeComponent,
   MyVaccinationComponent,
   MyReferenceComponent,
   MyHospitalsComponent
  ]
})

export class MedicalCardModule { }
