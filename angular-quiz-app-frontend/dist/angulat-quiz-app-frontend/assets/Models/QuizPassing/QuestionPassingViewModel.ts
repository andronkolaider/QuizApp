import { Observable } from "rxjs";
import { AnswerPassingViewModel } from "./AnswerPassingViewModel";

export class QuestionPassingViewModel{
  Instance:string;
  Hint:string;
  Multiple: boolean;
  Answered: boolean;
  Answers: AnswerPassingViewModel[];
  SelectedOne: string;
  Guid: string;
}