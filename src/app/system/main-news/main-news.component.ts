import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.scss']
})
export class MainNewsComponent implements OnInit {

  constructor() { }
  dropdown_flag = false;
  ngOnInit(): void {
  }

  
  openSpecialization(){
    if(this.dropdown_flag === false){
      this.dropdown_flag = true;
    }
    else{
      this.dropdown_flag = false;
    }
  }

}
