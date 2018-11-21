import { AnswerViewModel } from "./AnswerViewModel";

export class QuestionViewModel{
  Instance: string;
  Hint: string;
  Answers: AnswerViewModel[];
  IsValid: boolean;
  Guid: string;
}