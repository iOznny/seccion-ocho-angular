import { Component, OnInit } from '@angular/core';
import { info } from 'console';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: [
  ]
})

export class NgSwitchComponent implements OnInit {

  alert: string = 'warning';

  constructor() { 
  }

  ngOnInit(): void {
  }

}
