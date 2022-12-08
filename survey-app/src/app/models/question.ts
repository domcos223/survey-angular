import { Option } from "./option";
import {v4 as uuidv4} from 'uuid';

export class Question {
  id: string;
  text: string;
  surveyId: string;
  options: Option[] = [];
  mostAnsweredOp: string;
  orderId: number;

  constructor(id: string, orderId: number, surveyId: string, text: string, mostAnsweredOp: string) {
    this.id = id;
    this.orderId = orderId;
    this.surveyId = surveyId;
    this.text = text;
    this.mostAnsweredOp = mostAnsweredOp;
  }

  addOption(){
    this.options.push(new Option(this.genOptionId(), this.genOrderId(), this.id,"",false,0));
  }

  genOptionId() {
    let generatedId = uuidv4();
    return generatedId;
  }

  genOrderId() {
    return this.options.length+1;
  }
}
