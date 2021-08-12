import { Component, OnInit } from '@angular/core';
import {ChartModule} from 'primeng/chart';
import { MainService} from './main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  responsiveOptions;
  GetChartData: any;
  lineStylesData: any;
  ChatFlag: boolean;
  NewsFlag: boolean;
  News: any;

  constructor(private service : MainService, private router: Router) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }


  ngOnInit(): void {
    this.ChatFlag = false;
    this.NewsFlag = false;
    this.service.get_covid().subscribe(value => {
      this.GetChartData = value;
      this.lineStylesData = {
        labels: this.GetChartData.items.data,
        datasets: [
          {
            label: 'Заболевших',
            data: this.GetChartData.items.sick,
            fill: false,
            borderColor: '#FFA726'
          },
          {
            label: 'Выздоровевших',
            data: this.GetChartData.items.healed,
            fill: false,
            borderColor: '#66BB6A'
          },
          {
            label: 'Умерших',
            data: this.GetChartData.items.died,
            fill: false,
            borderColor: '#FFAAAA'

          }
        ]
      };
      this.ChatFlag = true;

    });

    this.service.get_news().subscribe(value => {
      console.log(value);
      this.News = value;
      this.News = this.News.items;
      this.NewsFlag = true;
    })


  }
  public get singleCategory() {
    return this.News.filter((item, index) => index < 9 )
  }

  public singleText(text) {
    return text.substr(0, 60) + '...';
  }

 

  displayBasic: boolean;

   
  showBasicDialog() {
      this.displayBasic = true;
  }   

}
