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
  page : number = 1;
  pageSize : number = 15;

  constructor(public surveyService : SurveyService) { }

  ngOnInit(): void {

    this.surveyService.getSurveys()
    .subscribe(surveys => {
     this.surveyDashboard = surveys as Survey[]
    })
  }

  onDelete(name: string, id: string) {

    var result = confirm("Are you sure you want to delete this survey?\n" + name);
    if (result) {
        this.surveyService.deleteSurvey(id)
        .subscribe(surveys => {
          this.surveyService.getSurveys().subscribe(surveys => {
            this.surveyDashboard = surveys as Survey[]
          })
        });
    }
  }

}
