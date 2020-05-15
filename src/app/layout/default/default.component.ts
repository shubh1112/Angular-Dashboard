import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  siderBarOpen = true;

  constructor() { }

  ngOnInit(): void { }

  siderBarToggler($event) {
    this.siderBarOpen = !this.siderBarOpen;
  }
}
