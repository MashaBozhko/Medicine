import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {ProfileComponent} from './profile.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { CommunicationComponent } from './communication/communication.component';
import {ProfileRoutingModule} from './profile-routing.module';
import { ReceptionsComponent } from './receptions/receptions.component';
import { HealthDiaryComponent } from './health-diary/health-diary.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SanResortCardComponent } from './san-resort-card/san-resort-card.component';
import { PersonalAreaComponent } from './personal-area/personal-area.component';
import {MedicalCardModule} from './medical-card/medical-card.module';
import { CovidModule } from './covid/covid.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ProfileRoutingModule,
    MedicalCardModule,
    CovidModule
  ],
  declarations: [
   ProfileComponent,
   MenuComponent,
   CommunicationComponent,
   ReceptionsComponent,
   HealthDiaryComponent,
   NotificationsComponent,
   SanResortCardComponent,
   PersonalAreaComponent
  ]
})

export class ProfileModule { }
