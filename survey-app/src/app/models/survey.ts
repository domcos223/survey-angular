import {Question} from './question';
import {v4 as uuidv4} from 'uuid';

export class Survey {
  id: string = this.generateId(); //tsconfig strictProperty was set to false
  name: string = "";
  details: string = "";
  questions: Question[] = [];
  optionType: string = ""; //checkbox or radio buttons for options
  hasQuestion: boolean = false;

  addQuestion(){

    this.questions.push(new Question(this.genQuestionId(),this.id,"",""));
    this.hasQuestion = true;

  }
  genQuestionId() {
       let generatedId = uuidv4();
       return generatedId;
  }

  generateId() {
    return this.id = uuidv4();
  }

}
