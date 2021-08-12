import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-test',
  templateUrl: './general-test.component.html',
  styleUrls: ['./general-test.component.scss']
})
export class GeneralTestComponent implements OnInit {

  analyzesList_isOpen: boolean;
  symptomsList_isOpen: boolean;
  constructor() { }

  ngOnInit(): void {
    this.analyzesList_isOpen = false;
    this.symptomsList_isOpen = true;
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

  openSymptoms(){
    if(this.symptomsList_isOpen === false){
      this.symptomsList_isOpen = true;
    }
    else{
      this.symptomsList_isOpen = false;
    }
  }
  openAnalyzes(){
    if(this.analyzesList_isOpen === false){
      this.analyzesList_isOpen = true
    }
    else{
      this.analyzesList_isOpen = false;
    }
  }
}
