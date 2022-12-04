import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Survey } from '../models/survey';
import { SurveyService } from '../shared/new-survey.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {
  survey: Survey;
  constructor(public service : SurveyService, private router : Router, private route: ActivatedRoute) {
    this.survey = new Survey();
    this.route.params.subscribe((res) => {
      this.survey.id = res['id'];
    });
   }

  ngOnInit(): void {
    this.service.getSurveyById(this.survey.id).subscribe((fromDbSurvey) => {
      this.survey = fromDbSurvey as Survey;
    });
  }



}
