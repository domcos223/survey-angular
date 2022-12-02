import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Option } from '../models/option';
import { Survey } from '../models/survey';
import { SurveyService } from '../shared/new-survey.service';

@Component({
  selector: 'app-fill-survey',
  templateUrl: './fill-survey.component.html',
  styleUrls: ['./fill-survey.component.css'],
})
export class FillSurveyComponent implements OnInit {
  survey: Survey;
  selectedValue = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public service: SurveyService
  ) {
    this.survey = new Survey();
    this.route.params.subscribe((res) => {
      this.survey.id = res['id'];
    });
  }

  ngOnInit(): void {
    this.service.getSurveyById(this.survey.id).subscribe((fromDbSurvey) => {
      this.survey = fromDbSurvey as Survey;
      console.log(this.survey);
    });
  }

  onSelectedOption(options: any, optionid: any) {
    options.forEach((item: Option) => {
      if (item.id != optionid) {
        item.isPicked = false;
      } else {
        item.isPicked = true;
      }
    });
  }

  onSaveAnswers(form: NgForm) {
    this.service.putAnswersSurvey(this.survey.id, this.survey).subscribe({
      complete: () => {
        this.router.navigate(['/surveys']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
