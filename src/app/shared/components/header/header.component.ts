import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSiderBarEmmiter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  toggleSideBar() {
    this.toggleSiderBarEmmiter.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300)
  }

}
