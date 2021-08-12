import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterCodeComponent } from './register-code/register-code.component';
import { RegisterPhoneComponent } from './register-phone/register-phone.component';
import { RegisterComponent } from './register.component';



const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'reg-code', component: RegisterCodeComponent},
  {path: 'reg-phone', component: RegisterPhoneComponent}
       ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})

export class RegisterRoutingModule { }