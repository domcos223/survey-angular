import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Survey } from '../models/survey';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  public survey: Survey;

  constructor(private router: Router) {
    this.survey = new Survey("My new survey", "The details, filled later...");
   }

  ngOnInit() : void {
  }

  saveForm() {
    console.log(JSON.stringify(this.survey));
  }

}
