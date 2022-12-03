export class Option {
  id: string;
  questionId: string;
  text: string;
  isPicked: boolean;
  answered: number;

  constructor(id: string, questionId: string, text: string, isPicked: boolean, answered: number) {
    this.id = id;
    this.questionId = questionId;
    this.text = text;
    this.isPicked = isPicked;
    this.answered = answered;
  }

}
