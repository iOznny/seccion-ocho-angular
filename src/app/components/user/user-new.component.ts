import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user-new',
  template: `
    <p>
      user-new works!
    </p>
  `,
  styles: [
  ]
})

export class UserNewComponent implements OnInit {

  constructor(private router: ActivatedRoute) { 
    this.router.parent.params.subscribe( res => {
      console.log('Router Children');
      console.log(res);
    });
  }

  ngOnInit(): void {
  }

}
