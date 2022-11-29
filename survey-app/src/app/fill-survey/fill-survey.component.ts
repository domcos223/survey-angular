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

  survey: Survey;
  constructor(private router: Router, private route: ActivatedRoute, public service: SurveyService) {
    this.survey = new Survey();
    this.route.params.subscribe((res) => {
      this.survey.id = res['id'];
    });
  }

  ngOnInit(): void {

      this.service.getSurveyById(this.survey.id)
   .subscribe(fromDbSurvey => {
    this.survey = fromDbSurvey as Survey
    console.log(this.survey);
   })
  }

  onSelectedOption(option : any) {
    if (option.isPicked == true) {
      option.isPicked = true;
    }
    else
    {
      option.isPicked = false;
    }
    //if true add 1 to option.answered
    //if false stay default

 }

  onSaveAnswers(form : NgForm) {
    this.service.putAnswersSurvey(this.survey.id, this.survey).subscribe( {
      complete: () => {
        this.router.navigate(['/surveys'])},
      error: error => {
        console.log(error);
      }
    })};

}
