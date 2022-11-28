import { Survey } from "survey-angular";
import { Option } from "./option";
import {v4 as uuidv4} from 'uuid';

export class Question {
  id: string;
  text: string;
  surveyId: string;
  options: Option[] = [];
  answers: any;

  constructor(id: string, surveyId: string, text: string) {
    this.id = id;
    this.surveyId = surveyId;
    this.text = text;
  }

  addOption(){

    this.options.push(new Option(this.genOptionId(),this.id,""));
  }

  genOptionId() {
    let generatedId = uuidv4();
    return generatedId;
  }
}
