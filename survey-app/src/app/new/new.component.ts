import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Survey } from '../models/survey';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  public survey: Survey;

  constructor(private router: Router) {
    this.survey = new Survey('My new survey', 'The details, filled later...');
  }

  ngOnInit(): void {}

  saveForm() {
    //console.log(JSON.stringify(this.survey));
    const oldItems = localStorage.getItem('surveyDashboard');
    if (oldItems !== null) {
      const surveyDashboard = JSON.parse(oldItems);
      surveyDashboard.push(this.survey);
      localStorage.setItem('surveyDashboard', JSON.stringify(surveyDashboard));
    }
    else {
      const surveyArray = [];
      surveyArray.push(this.survey);
      localStorage.setItem('surveyDashboard', JSON.stringify(surveyArray));
    }
    console.log(localStorage.getItem);
    this.router.navigate(['/dashboard']);
  }
}
