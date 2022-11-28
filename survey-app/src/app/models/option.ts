export class Option {
  id: string;
  questionId: string;
  text: string;

  constructor(id: string, questionId: string, text: string) {
    this.id = id;
    this.questionId = questionId;
    this.text = text;
  }
}
