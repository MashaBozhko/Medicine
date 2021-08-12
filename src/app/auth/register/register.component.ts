import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../system/services/models/user.model';
import { UserService } from '../../system/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      snils: new FormControl(null, [Validators.required, Validators.maxLength(14)]),
      patronymic: new FormControl(null, [Validators.required]),
      date_birth: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      sex: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    let fio =
      this.registerForm.get('lastName').value +
      ' ' +
      this.registerForm.get('firstName').value +
      ' ' +
      this.registerForm.get('patronymic').value;
    let email = this.registerForm.get('email').value;
    let password = this.registerForm.get('password').value;
    let sex;
    if (this.registerForm.get('sex').value === '1') {
      sex = 1;
    } 
    else if (this.registerForm.get('sex').value === '0') {
      sex = 0;
    }
    let snils = this.registerForm.get('snils').value;
    let birthday = new Date().toDateString();
    let live_place = this.registerForm.get('city').value;
  
    console.log(new Date().toDateString());
    this.userService.createOne(email, password, fio, sex, birthday, live_place, snils).subscribe();
    console.log('OK');
  }

  goToLogin() {
    this.router.navigate(['', 'login']);
  }
}
