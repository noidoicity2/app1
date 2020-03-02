import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `
  <h2>dasd</h2>
  <app-test2></app-test2>
  `,
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  name: string;
  static testmethod() {
  console.log('dmm');
}

  constructor() { }

  ngOnInit(): void {
  }


}

