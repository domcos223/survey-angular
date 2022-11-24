import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Survey } from '../models/survey';
import { SurveyService } from '../shared/new-survey.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  public survey: Survey;

  constructor(public service: SurveyService , private router: Router ) {
    this.survey = new Survey();
  }

  ngOnInit(): void {}

  onSubmit(form : NgForm) {
    this.service.postSurvey().subscribe( {
      complete: () => {
        this.router.navigate(['/surveys'])},
      error: error => {
        console.log(error);
      }
    })};

  }
  /*saveForm() {
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
  }*/

