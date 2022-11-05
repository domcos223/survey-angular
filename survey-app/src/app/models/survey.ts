import {Question} from './question';

export class Survey {
  id?: number;
  name?: string;
  details?: string;
  questions?: Question[];

  constructor(name: string) {
    this.name = name;
  }
}
