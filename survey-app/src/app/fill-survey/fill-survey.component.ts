import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Survey } from '../models/survey';



@Component({
  selector: 'app-fill-survey',
  templateUrl: './fill-survey.component.html',
  styleUrls: ['./fill-survey.component.css']
})
export class FillSurveyComponent implements OnInit {
  survey: Survey;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.survey = new Survey();
    this.route.params.subscribe((res) => {
      this.survey.id = res['id'];
    });
  }

  ngOnInit(): void {
    const stored_surveys = localStorage.getItem('surveyDashboard');
    if (stored_surveys !== null) {
      const surveyDashboard = JSON.parse(stored_surveys);
      const currentSurvey = surveyDashboard.find(
        (x: any) => x.id == this.survey.id
      );
      if (currentSurvey !== undefined) {
        this.survey.id = currentSurvey.id;
        this.survey.name = currentSurvey.name;
        this.survey.details = currentSurvey.details;
        this.survey.questions = currentSurvey.questions;
      }
    }
  }

  saveAnswers() {

  }

}
