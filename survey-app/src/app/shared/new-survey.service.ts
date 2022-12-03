import { Injectable } from '@angular/core';
import { Survey } from '../models/survey';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  formData : Survey = new Survey();
  readonly baseURL = 'https://localhost:7012/api/Surveys'

  postSurvey()  {
      return this.http.post(this.baseURL,this.formData)
 }

 getSurveys() : Observable<Survey[]> {
    return this.http.get<Survey[]>(this.baseURL)
 }

 getSurveyById(id: string) : Observable<Survey> {
  let geturl = 'https://localhost:7012/api/Surveys/' + id
  return this.http.get<Survey>(geturl);
 }

 onTypeSelected(value:string) {
  this.formData.optionType = value;
}

putAnswersSurvey(id: string, filledSurveyData : Survey) : Observable<Survey> {
  let geturl = 'https://localhost:7012/api/Surveys/' + id
  return this.http.put<Survey>(geturl, filledSurveyData)
}

deleteSurvey(id: string) {
  let url = 'https://localhost:7012/api/Surveys/' + id
  return this.http.delete<Survey>(url);
}

}
