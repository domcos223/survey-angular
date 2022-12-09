export class Option {
  id: string;
  questionId: string;
  text: string;
  isPicked: boolean;
  answered: number;
  orderId: number;

  constructor(id: string, orderId: number, questionId: string, text: string, isPicked: boolean, answered: number) {
    this.id = id;
    this.orderId = orderId;
    this.questionId = questionId;
    this.text = text;
    this.isPicked = isPicked;
    this.answered = answered;
  }

}
