import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-house-call',
  templateUrl: './house-call.component.html',
  styleUrls: ['./house-call.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HouseCallComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
