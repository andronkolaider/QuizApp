import { Observable } from "rxjs";
import { ChoicePassingViewModel } from "./ChoicePassingViewModel";

export class TestPassingViewModel{
  Guid:string;
  TestingGuid:string;
  Interviewee: string;
  TestingStartDateTime: string;
  TestingEndDateTime: string;
  Duration: string;
  QuestionTried: number;
  Score: number;
  AttemptGuid: string;
  Questions: ChoicePassingViewModel[];
}