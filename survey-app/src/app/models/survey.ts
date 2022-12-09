import {Question} from './question';
import {v4 as uuidv4} from 'uuid';

export class Survey {
  id: string = this.generateId();
  name: string = "";
  details: string = "";
  questions: Question[] = [];
  optionType: string = ""; //checkbox or radio buttons for options
  hasQuestion: boolean = false; //for form validation

  addQuestion(){

    this.questions.push(new Question(this.genQuestionId(), this.genOrderId(), this.id,"",""));
    this.hasQuestion = true;

  }
  genQuestionId() {
       let generatedId = uuidv4();
       return generatedId;
  }

  generateId() {
    return this.id = uuidv4();
  }

  genOrderId() {
    return this.questions.length+1;
  }

  isValid(){
    for(let q of this.questions) {
        if (q.options.length <= 1) {
          return false;
        }
    }
    return true;
}

}
