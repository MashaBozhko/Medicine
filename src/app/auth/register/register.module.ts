import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RegisterCodeComponent } from './register-code/register-code.component';
import { RegisterPhoneComponent } from './register-phone/register-phone.component';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule
  ],

  declarations: [
    RegisterCodeComponent,
    RegisterComponent,
    RegisterPhoneComponent
  ],
  providers: []
})
export class RegisterModule { }
