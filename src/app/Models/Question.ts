import { Choice } from "./Choice";
import { Quiz } from "./Quiz";

export class Question {
    id!: number;
    quiz!: Quiz;
    text!: string;
    choices!: Choice[];
  }
  