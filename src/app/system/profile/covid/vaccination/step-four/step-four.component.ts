import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SelectItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepFourComponent implements OnInit {

  selectedAlergics: string[] = [];
  
  selectedChronics: string[] = [];

  items: SelectItem[];

  item: string;

  alergics: any[];

  chronics: any[];

  constructor(private primengConfig: PrimeNGConfig) {
    this.alergics = [
      { name: 'Сыпь', code: 'NY' },
      { name: 'Еще сыпь', code: 'RM' },
      { name: 'Ну и еще сыпь', code: 'LDN' },
    ];

    this.chronics = [
      { name: 'Цирроз печени', code: 'NY' },
      { name: 'Лекарственные и алкогольные поражения печени', code: 'RM' },
      { name: 'Лекарственные и алкогольные поражения пе', code: 'RM' },
    ];
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
