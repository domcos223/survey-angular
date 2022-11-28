import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'header';
  constructor() { }
  menuVar:boolean= false;
  iconVar:boolean = false;

  openMenu() {
    this.menuVar =! this.menuVar;
    this.iconVar =! this.iconVar;
  }

}

