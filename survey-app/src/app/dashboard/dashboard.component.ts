import { Component, OnInit } from '@angular/core';
import { NgbTypeaheadWindow } from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window';
import { Survey } from '../models/survey';
import { SurveyService } from '../shared/new-survey.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  surveyDashboard: Survey[];

  constructor(public surveyService: SurveyService) {

  }

  ngOnInit(): void {

   this.surveyService.getSurveys()
   .subscribe(surveys => {
    this.surveyDashboard = surveys as Survey[]
   })


  }

}
