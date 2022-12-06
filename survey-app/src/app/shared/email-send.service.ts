import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailComponent } from '../email/email.component';
import { EmailTemplate } from '../models/emailtemplate';

@Injectable({
  providedIn: 'root'
})
export class EmailSendService {

  constructor(private http: HttpClient) {
   }

  formData : EmailTemplate = new EmailTemplate();
  readonly baseURL = 'https://localhost:7012/api/Email'

  sendEmail()  {
    return this.http.post(this.baseURL, this.formData);
  }
}
