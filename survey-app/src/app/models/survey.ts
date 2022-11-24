import {Question} from './question';
import {v4 as uuidv4} from 'uuid';

export class Survey {
  id: string = this.generateId(); //tsconfig strictProperty was set to false
  name: string = "";
  details: string = "";
  questions: Question[] = [];

  addQuestion(){

    this.questions.push(new Question(this.genQuestionId(),this.id,""));
  }
  genQuestionId() {
       let generatedId = uuidv4();
       return generatedId;
  }

  generateId() {
    return this.id = uuidv4();
  }

}
