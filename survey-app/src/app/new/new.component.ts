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
    this.survey = new Survey('', '');
  }

  ngOnInit(): void {}

  getNewId() {
    const storedSurveys = localStorage.getItem('surveyDashboard');

    if (storedSurveys !== null) {
      const surveyDashboard = JSON.parse(storedSurveys);
      return surveyDashboard.length+1;
    }
    else
    {
      return 1;
    }
  }

  saveForm() {
    //console.log(JSON.stringify(this.survey));
    const oldItems = localStorage.getItem('surveyDashboard');
    const newId = this.getNewId();
    this.survey.id = newId;
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
    console.log(this.survey.id);
    this.router.navigate(['/surveys']);
  }
}
