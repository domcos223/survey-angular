import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'survey-app';
  constructor() {}

  menuVar:boolean= false;
  iconVar:boolean = false;
  openMenu() {
    this.menuVar =! this.menuVar;
    this.iconVar =! this.iconVar;
  }

}

