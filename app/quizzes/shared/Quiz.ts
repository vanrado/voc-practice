import{Question} from "./Question"

export class Quiz {
  id: string;
  name: string;
  questions: Question[];
  success: number;
  attempt: number;

  constructor(id?: string, name?: string, questions?: Question[]){
    this.id = id ? id : "-1";
    this.name = name ? name : "";
    this.questions = questions ? questions : [];
  };
}
