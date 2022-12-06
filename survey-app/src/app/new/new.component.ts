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
  public faultyQuestion: boolean = false;

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


    optionCount() {
        const questions = Array.from(this.service.formData.questions)
        console.log(questions);
        questions.forEach(q => {
          console.log(q.options.length);
          if (q.options.length <= 1) {
            this.faultyQuestion = true;
          }
        })

}
}

