import { Component, ChangeDetectionStrategy, ElementRef, OnInit } from "@angular/core";
import { MenuItem, PrimeNGConfig, SelectItem } from "primeng/api";
import { Calendar } from "@fullcalendar/core";
import esLocale from "@fullcalendar/core/locales/es";
import { LocaleSettings } from "primeng/calendar";
import {
  TranslateService,
  TranslateLoader,
  TranslateStore,
} from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  constructor(
    private config: PrimeNGConfig,
    private translateService: TranslateService
  ) {}

  defaultTime: any;
  ngOnInit() {
    this.translateService.use("ru");
    this.translate("ru");
  }

  translate(lang: string) {
    this.translateService.use(lang);
    this.translateService
      .get("primeng")
      .subscribe((res) => this.config.setTranslation(res));
  }
}
