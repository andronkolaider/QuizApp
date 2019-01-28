import { Component, OnInit } from '@angular/core';
import { TestViewModel } from '../../assets/Models/Managing/TestViewModel';
import { QuestionViewModel } from '../../assets/Models/Managing/QuestionViewModel';
import { AnswerViewModel } from '../../assets/Models/Managing/AnswerViewModel';
import { HttpService } from '../services/http/http.service';

@Component({
  selector: 'app-remove-answer',
  templateUrl: './remove-answer.component.html',
  styleUrls: ['./remove-answer.component.css']
})
export class RemoveAnswerComponent implements OnInit {
 testsList: TestViewModel[];

 questionsList: QuestionViewModel[];
 selectedTest: TestViewModel;
 isShowTestQuestions: boolean = false;
  selectedQuestion:QuestionViewModel;
 selectedQuestionAnswers: AnswerViewModel[];
  constructor(private http:HttpService) { }

  selectedQuestionGetAnswers(question: QuestionViewModel)
  {
    this.selectedQuestion = question;
    this.selectedQuestionAnswers = question.Answers;
  }

  isShowTestQuestionsValueChange(test:TestViewModel)
  {
    if (this.isShowTestQuestions == true)
    {
      this.isShowTestQuestions = false;
    }
    else
    {
      this.isShowTestQuestions = true;
    }
    this.selectedTest = test;
  }

  GetAllTests()
  {
    this.http.getAllTests().subscribe((x: TestViewModel[]) => this.testsList = x);
  }

  removeAnswer(_answerGuid: string)
  {
    var result;
    this.http.removeAnswer(_answerGuid).subscribe((x: boolean) => {
      result = x;
      if (result == true) {
        var deletedAnswer = this.selectedQuestion.Answers.find(x => x.Guid === _answerGuid);
        var deletedAnswerIndex = this.selectedQuestion.Answers.indexOf(deletedAnswer);
        if (deletedAnswerIndex !== -1)
        {
          this.selectedQuestion.Answers.splice(deletedAnswerIndex);
          }
        
      }
    });
  }

  ngOnInit() {
    this.GetAllTests();
  }

}
