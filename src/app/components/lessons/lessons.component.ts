import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html'
})

export class LessonsComponent implements OnInit {

  alert: string = "alert-danger";
  properties: any = {
    danger: false
  }

  /*
    Proceso Asincrono
  */
 loading: boolean = false;

  constructor() { 
  }

  ngOnInit(): void {
  }

  execute() {
    this.loading = true;
    setTimeout( () => this.loading = false, 3000);
  }

}
