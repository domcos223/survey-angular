import { Component, OnInit } from '@angular/core';
import { Survey } from '../models/survey';
import { SurveyService } from '../shared/new-survey.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  surveyDashboard: Survey[];
  page : number = 1;
  pageSize : number = 15;

  constructor(public surveyService: SurveyService) {

  }

  ngOnInit(): void {

   this.surveyService.getSurveys()
   .subscribe(surveys => {
    this.surveyDashboard = surveys as Survey[]
   })


  }

}
