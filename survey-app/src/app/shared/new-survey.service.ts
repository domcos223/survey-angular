import { Injectable } from '@angular/core';
import { Survey } from '../models/survey';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewSurveyService {

  constructor(private http: HttpClient) { }

  formData : Survey = new Survey();
  readonly baseURL = 'https://localhost:7012/api/Surveys'

  postSurvey()  {
      return this.http.post(this.baseURL,this.formData)
 }

 handleError() {
  console.log();
 }
}
