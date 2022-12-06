import { Option } from "./option";
import {v4 as uuidv4} from 'uuid';

export class Question {
  id: string;
  text: string;
  surveyId: string;
  options: Option[] = [];
  mostAnsweredOp: string;
  hasOption: boolean;

  constructor(id: string, surveyId: string, text: string, mostAnsweredOp: string) {
    this.id = id;
    this.surveyId = surveyId;
    this.text = text;
    this.mostAnsweredOp = mostAnsweredOp;
  }

  addOption(){

    this.options.push(new Option(this.genOptionId(),this.id,"",false,0));
    this.hasOption = true;
  }

  genOptionId() {
    let generatedId = uuidv4();
    return generatedId;
  }
}
