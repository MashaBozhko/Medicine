import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: 'app-analyzes',
  templateUrl: './analyzes.component.html',
  styleUrls: ['./analyzes.component.scss']
})
export class AnalyzesComponent implements OnInit {

  value: Date;

  constructor(

  ) {}

  ngOnInit() {

  }
}
