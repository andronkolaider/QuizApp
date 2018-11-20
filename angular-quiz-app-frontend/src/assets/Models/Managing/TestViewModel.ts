import { Observable } from "rxjs";
import { QuestionViewModel } from "./QuestionViewModel";

export class TestViewModel{
  Name: string;
  Description: string;
  TestTimeLimit: string;
  QuestionTimeLimit: string;
  Questions: Observable<QuestionViewModel>[];
  Guid: string;
  IsValid: boolean;
}