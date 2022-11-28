import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Survey } from '../models/survey';
import { SurveyService } from '../shared/new-survey.service';



@Component({
  selector: 'app-fill-survey',
  templateUrl: './fill-survey.component.html',
  styleUrls: ['./fill-survey.component.css']
})
export class FillSurveyComponent implements OnInit {
  surveyForm = new FormGroup({
    question : new FormGroup({
      option : new FormControl('')
    })
})


  survey: Survey;
  constructor(private router: Router, private route: ActivatedRoute, public surveyService: SurveyService) {
    this.survey = new Survey();
    this.route.params.subscribe((res) => {
      this.survey.id = res['id'];
    });
  }

  ngOnInit(): void {

      this.surveyService.getSurveyById(this.survey.id)
   .subscribe(fromDbSurvey => {
    this.survey = fromDbSurvey as Survey
    console.log(this.survey);
   })

  }



  onSaveAnswers(form : NgForm) {

  }

}
