import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: "app-diagnostics",
  templateUrl: "./diagnostics.component.html",
  styleUrls: ["./diagnostics.component.scss"],
})
export class DiagnosticsComponent implements OnInit {
  value: Date;

  constructor(
    
  ) {}

  ngOnInit() {

  }

}
