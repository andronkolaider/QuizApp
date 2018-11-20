import { Observable } from "rxjs";

export class ChoicePassingViewModel{
  QuestionGuid: string;
  AnswersSelected: Observable<string>[];
}