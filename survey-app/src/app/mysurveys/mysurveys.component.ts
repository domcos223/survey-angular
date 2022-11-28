import { Component, OnInit } from '@angular/core';
import { Survey } from '../models/survey';
import { SurveyService } from '../shared/new-survey.service';

@Component({
  selector: 'app-mysurveys',
  templateUrl: './mysurveys.component.html',
  styleUrls: ['./mysurveys.component.css']
})
export class MysurveysComponent implements OnInit {
  surveyDashboard: Survey[];
  constructor(public surveyService : SurveyService) { }

  ngOnInit(): void {

    this.surveyService.getSurveys()
    .subscribe(surveys => {
     this.surveyDashboard = surveys as Survey[]
    })
  }

}
