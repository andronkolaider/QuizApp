import { Observable } from "rxjs";
import { AnswerViewModel } from "./AnswerViewModel";

export class QuestionViewModel{
  Instance: string;
  Hint: string;
  Answers: Observable<AnswerViewModel>[];
}