import {Question} from './question';

export class Survey {
  id?: number;
  name: string;
  details: string;
  questions: Question[] = [];

  constructor(name: string, details: string) {
    this.name = name;
    this.details = details;
  }

  addQuestion(){
    let generatedId = (this.questions.length+1).toString();
    this.questions.push(new Question("question"+generatedId,""));
  }
}
