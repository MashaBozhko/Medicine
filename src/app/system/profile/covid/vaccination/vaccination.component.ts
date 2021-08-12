import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SelectItem, PrimeNGConfig } from "primeng/api";
import { MenuItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';
import {StepsModule} from 'primeng/steps';
import { FilterService } from 'primeng/api';
import { VaccinationService } from '../../../clinic/vaccinationservice';
import { VaccinationPointService } from '../../../clinic/vaccinationpointservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.component.html',
  providers: [VaccinationService, VaccinationPointService, FilterService],
  styleUrls: ['./vaccination.component.scss']
})
export class VaccinationComponent implements OnInit {

  // vaccination steps

  items: MenuItem[];

  // calendar
  value: Date;

  // vaccination

  selectedVaccination: any;

  vaccinations: any[];

  filteredVaccinations: any[];

  selectedVaccinations: any[];

  selectedVaccinationAdvanced: any[];

  // vaccination-point

  selectedVaccinationPoint: any;

  vaccinationpoints: any[];

  filteredVaccinationPoints: any[];

  selectedVaccinationPoints: any[];

  selectedVaccinationPointAdvanced: any[];


  constructor(
    private filterService: FilterService,
    // vaccination
    private vaccinationService: VaccinationService,
    private vaccinationpointService: VaccinationPointService,
    private primeNGConfig: PrimeNGConfig,
  ) { }

  ngOnInit(): void {

    // vaccination
    this.vaccinationService.getVaccinations().then(vaccinations => {
      this.vaccinations = vaccinations;
    });

    // vaccination-point
    this.vaccinationpointService.getVaccinationPoints().then(vaccinationpoints => {
      this.vaccinationpoints = vaccinationpoints;
    });
    // 
    this.primeNGConfig.ripple = true;

    // steps

    this.items = [{
          label: 'vaccination-step-one',
          routerLink: 'vaccination-step-one'
      },
      {
          label: 'vaccination-step-two',
          routerLink: 'vaccination-step-two'
      },
      {
          label: 'vaccination-step-three',
          routerLink: 'vaccination-step-three'
      },
      {
          label: 'vaccination-step-four',
          routerLink: 'vaccination-step-four'
      }
    ];
  }

  filterVaccination(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.vaccinations.length; i++) {
      let vaccination = this.vaccinations[i];
      if (vaccination.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(vaccination);
      }
    }

    this.filteredVaccinations = filtered;
  }

  filterVaccinationPoint(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.vaccinationpoints.length; i++) {
      let vaccinationpoint = this.vaccinationpoints[i];
      if (vaccinationpoint.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(vaccinationpoint);
      }
    }

    this.filteredVaccinationPoints = filtered;
  }

}
