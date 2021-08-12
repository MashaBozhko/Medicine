import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-two-spectest',
  templateUrl: './step-two-spectest.component.html',
  styleUrls: ['./step-two-spectest.component.scss']
})
export class StepTwoSpectestComponent implements OnInit {

  gender = '';
  val: number = 0;
  flag = true;
  showAge:number;
  testForm1: FormGroup
  changeQuestiong(): void {

    const element = <HTMLInputElement> document.getElementById('men');
    if (element.checked == true) {
      this.gender = 'men';
      this.flag = true;
    }
    const element_1 = <HTMLInputElement> document.getElementById('women');
    if (element_1.checked == true) {
      this.gender = 'women';
      this.flag = false;
    }
  }

  analyzesList_isOpen: boolean;
  symptomsList_isOpen: boolean;
  constructor() { }

  ngOnInit(): void {
    this.analyzesList_isOpen = false;
    this.symptomsList_isOpen = true;

    this.testForm1 = new FormGroup({
      age: new FormControl(0, [Validators.required]),

    });
  }

  openCity( cityName: string) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
  }

  // tslint:disable-next-line:typedef
  openSymptoms(): void{
    if (this.symptomsList_isOpen === false){
      this.symptomsList_isOpen = true;
    }
    else{
      this.symptomsList_isOpen = false;
    }
  }
  openAnalyzes(): void{
    if (this.analyzesList_isOpen === false){
      this.analyzesList_isOpen = true;
    }
    else{
      this.analyzesList_isOpen = false;
    }
  }


  onSubmit1(){

  }

}
