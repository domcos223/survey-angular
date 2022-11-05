import { Option } from "./option";

export class Question {
  id?: number;
  text?: string;
  options?: Option[];
  answers?: any;

  constructor(text: string) {
    this.text = text;
  }
}
