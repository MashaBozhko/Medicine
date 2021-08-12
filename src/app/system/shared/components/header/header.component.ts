import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

interface Clinic {
  name: string,
  code: string
}

export class DropdownDemo {

  clinics: Clinic[];

  selectedClinicCode: Clinic;

  constructor() {
      this.clinics = [
          {name: 'Поликлиника №4', code: 'П№4'},
          {name: 'Поликлиника №7', code: 'П№7'}
      ];
  }

}