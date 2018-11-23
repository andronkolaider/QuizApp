import { QuestionViewModel } from "./QuestionViewModel";

export class TestViewModel{
  Name: string;
  Description: string;
  TestTimeLimit: string;
  QuestionTimeLimit: string;
  Questions: QuestionViewModel[];
  Guid: string;
  IsValid: boolean;
}