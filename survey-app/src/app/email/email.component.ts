import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { EmailTemplate } from '../models/emailtemplate';
import { Survey } from '../models/survey';
import { EmailSendService } from '../shared/email-send.service';
import { SurveyService } from '../shared/new-survey.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  surveyurl : string;
  emailtemplate : EmailTemplate;
  email : string;

  constructor(private router: Router,
    private route: ActivatedRoute,
    public service: EmailSendService) {

      this.emailtemplate = new EmailTemplate();
      this.route.params.subscribe((res) => {
        this.surveyurl = "http://localhost:4200/fill/" + res['id'];
      });

    }

  ngOnInit(): void {
    this.service.formData.content = "Hi!\nYou were invited to fill a survey.\nFollow the link to submit your answers!\n\n" + this.surveyurl;
  }

  submitForm(form : NgForm) {
    this.service.formData.emails.push(this.email);
    this.service.sendEmail().subscribe( {
      complete: () => {
        form.reset();
        window.alert("Your message was successfully sent to the following address: \n" + this.email);
        this.router.navigate(['/mysurveys'])},
      error: error => {
        console.log(error);
      }
    })};
  }

