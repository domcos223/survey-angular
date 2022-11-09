import { Option } from "./option";

export class Question {
  id: string;
  text: string;
  options: Option[] = [];
  answers: any;

  constructor(id: string, text: string) {
    this.id = id;
    this.text = text;
  }

  addOption(){
    let generatedId = this.options.length+1;
    this.options.push(new Option(this.id+"_"+generatedId, "New option"));
  }
}
