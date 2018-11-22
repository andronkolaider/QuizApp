import { Component, OnInit } from '@angular/core';
import { TestViewModel } from 'src/assets/Models/Managing/TestViewModel';
import { QuestionViewModel } from 'src/assets/Models/Managing/QuestionViewModel';
import { AnswerViewModel } from 'src/assets/Models/Managing/AnswerViewModel';
import { HttpService } from '../services/http/http.service';
import { Guid } from 'guid-typescript';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-create-answer',
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.css']
})
export class CreateAnswerComponent implements OnInit {
  testsList: TestViewModel[];
  selectedQuestion:QuestionViewModel;
  questionsList: QuestionViewModel[];
  selectedTest: TestViewModel;
  isShowTestQuestions: boolean = false;
  selectedQuestionAnswers: AnswerViewModel[]=[];
  _instance: string;
  _isCorrect: boolean;
  isShowAddAnswerDiv: boolean;
  constructor(private http:HttpService) { }

  isShowAddAnswerDivValueChange()
  {
    if (this.isShowAddAnswerDiv == false)
    {
      this.isShowAddAnswerDiv = true;
    }

  }

  isShowTestQuestionsValueChange(test:TestViewModel)
  {
    if (this.isShowTestQuestions == false)
    {
      this.isShowTestQuestions = true;
    }
    this.selectedTest = test;
  }

  selectedQuestionGetAnswers(question: QuestionViewModel)
  {
    this.selectedQuestion = question;
    this.selectedQuestionAnswers = question.Answers;
  }

  GetAllTests()
  {
    this.http.GetAllTests().subscribe((x: TestViewModel[]) => this.testsList = x);
  }

  CreateAnswer()
  {
    var actionResult;
    var newAnswer = new AnswerViewModel();
    newAnswer.Guid = Guid.create().toString();
    newAnswer.Instance = this._instance;
    newAnswer.IsCorrect = this._isCorrect;
    this.http.CreateAnswer(this.selectedQuestion.Guid, newAnswer).subscribe((x: boolean) => {
      actionResult = x;
      if (actionResult == true)
      {
        this.selectedQuestion.Answers.push(newAnswer);
      }
    });
    
  }

  ngOnInit() {
    this.GetAllTests();
  }

}
