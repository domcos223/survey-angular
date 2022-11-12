import { Component, OnInit } from '@angular/core';
import { NgbTypeaheadWindow } from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window';
import { Survey } from 'survey-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  surveyDashboard: Survey[];

  constructor() { 
     this.surveyDashboard = [];
     
  }

  ngOnInit(): void {
  }

}
