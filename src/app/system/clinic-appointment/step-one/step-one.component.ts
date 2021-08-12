import { Component, OnInit } from '@angular/core';
import { SelectItem, PrimeNGConfig } from "primeng/api";
import { MenuItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';
import { FilterService } from 'primeng/api';
import { ClinicTypeService } from '../clinic-typeservice';
import { PolyclinicService } from '../polyclinicservice';
import { DistrictService } from '../districtservice';
import { RegionService } from '../regionservice';
import { LocalityService } from '../localityservice';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss'],
  providers: [ClinicTypeService, PolyclinicService, DistrictService, RegionService, LocalityService, FilterService]
})
export class StepOneComponent implements OnInit {

  // clinic-type

  selectedClinic: any;

  clinics: any[];

  filteredClinics: any[];

  selectedClinics: any[];

  selectedClinicAdvanced: any[];

  // region

  selectedRegion: any;

  regions: any[];

  filteredRegions: any[];

  selectedRegions: any[];

  selectedRegionAdvanced: any[];

  // Locality

  selectedLocality: any;

  localitys: any[];

  filteredLocalitys: any[];

  selectedLocalitys: any[];

  selectedLocalityAdvanced: any[];

  // district

  selectedDistrict: any;

  districts: any[];

  filteredDistricts: any[];

  selectedDistricts: any[];

  selectedDistrictAdvanced: any[];

  // Polylinic

  selectedPolyclinic: any;

  polyclinics: any[];

  filteredPolyclinics: any[];

  selectedPolyclinics: any[];

  selectedPolyclinicAdvanced: any[];


  // buttons

  visitOptions: any[];

  value1: string = "first";

  queOptions: any[];

  value2: string = "yes";

  label1isActive: boolean = true;


  constructor(
    private filterService: FilterService,
    // clinic-type
    private clinicTypeService: ClinicTypeService,
    // region
    private RegionService: RegionService,
    // Locality
    private LocalityService: LocalityService,
    // district
    private DistrictService: DistrictService,
    // Polylinic
    private PolyclinicService: PolyclinicService,
    // buttons
    private primeNGConfig: PrimeNGConfig) {
    this.visitOptions = [
      { label: "Первичный", value: "first" },
      { label: "Вторичный", value: "second" }
    ];

    this.queOptions = [
      { label: "Да", value: "yes" },
      { label: "Нет", value: "no" }
    ];
    
  }

  ngOnInit() {
    // clinic-type
    this.clinicTypeService.getClinics().then(clinics => {
      this.clinics = clinics;
    });
    // region
    this.RegionService.getRegions().then(regions => {
      this.regions = regions;
    });
    // Locality
    this.LocalityService.getLocalitys().then(localitys => {
      this.localitys = localitys;
    });
    // district
    this.DistrictService.getDistricts().then(districts => {
      this.districts = districts;
    });
    // polyclinic
    this.PolyclinicService.getPolyclinics().then(polyclinics => {
      this.polyclinics = polyclinics;
    });
    // buttons
    this.primeNGConfig.ripple = true;
    
  }

  filterClinic(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.clinics.length; i++) {
      let clinic = this.clinics[i];
      if (clinic.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(clinic);
      }
    }

    this.filteredClinics = filtered;
  }

  filterRegion(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.regions.length; i++) {
      let region = this.regions[i];
      if (region.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(region);
      }
    }

    this.filteredRegions = filtered;
  }

  filterLocality(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.localitys.length; i++) {
      let locality = this.localitys[i];
      if (locality.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(locality);
      }
    }

    this.filteredLocalitys = filtered;
  }

  filterDistrict(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.districts.length; i++) {
      let district = this.districts[i];
      if (district.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(district);
      }
    }

    this.filteredDistricts = filtered;
  }

  filterPolyclinic(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.polyclinics.length; i++) {
      let polyclinic = this.polyclinics[i];
      if (polyclinic.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(polyclinic);
      }
    }

    this.filteredPolyclinics = filtered;
  }


}