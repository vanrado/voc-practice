export class Question {
  wordOne: string;
  wordTwo: string;
  answer: string;

  constructor(wordOne: string, wordTwo: string){
    this.wordOne = wordOne;
    this.wordTwo = wordTwo;
    this.answer = "";
  };
}
