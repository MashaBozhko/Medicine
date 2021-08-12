import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../system/services/models/user.model';
import { UserService } from '../../system/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  onSubmit() {
    if(this.registerForm.invalid){
      return;
    }

    let email = this.registerForm.get('email').value;
    let password = this.registerForm.get('password').value;

    this.userService.login(email, password).subscribe((next: any) => {
      const user: User = next.items[0];
      console.log(user);
      localStorage.removeItem('fio');
      localStorage.removeItem('id');
      localStorage.setItem('fio', user.fio);
      localStorage.setItem('id', user.id);
    });
    this.router.navigate(['', 'main']);
  }

  goToRegistr() {
    this.router.navigate(['', 'register']);
  }
}
