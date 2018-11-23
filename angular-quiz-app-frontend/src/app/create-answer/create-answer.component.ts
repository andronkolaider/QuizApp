import { Component, OnInit, Output, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { QuestionViewModel } from '../../assets/Models/Managing/QuestionViewModel';
import { AnswerViewModel } from '../../assets/Models/Managing/AnswerViewModel';
import { HttpService } from '../services/http/http.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-answer',
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.css']
})
export class CreateAnswerComponent implements OnInit, OnChanges {
  //  testsList: TestViewModel[];
  @Input()
  selectedQuestion!: QuestionViewModel;
  //  questionsList: QuestionViewModel[];
  //  selectedTest: TestViewModel;
  // isShowTestQuestions: boolean = false;
  newAnswer: AnswerViewModel;
  @Input() selectedQuestionAnswers!: AnswerViewModel[];
  _instance: string;
  _isCorrect: boolean;
  @Input() isShowAddAnswerDiv!: boolean;

  constructor(private http: HttpService, private title: Title) { }

  isShowAddAnswerDivValueChange() {
    if (this.isShowAddAnswerDiv == false) {
      this.isShowAddAnswerDiv = true;
    }
  }

  // isShowTestQuestionsValueChange(test:TestViewModel)
  // {
  //   if (this.isShowTestQuestions == false)
  //   {
  //     this.isShowTestQuestions = true;
  //   }
  //   this.selectedTest = test;
  // }

  // selectedQuestionGetAnswers(question: QuestionViewModel)
  // {
  //   this.selectedQuestion = question;
  //   this.selectedQuestionAnswers = question.Answers;
  // }

  // GetAllTests()
  // {
  //   this.http.GetAllTests().subscribe((x: TestViewModel[]) => this.testsList = x);
  // }

  CreateAnswer() {
    this.newAnswer = new AnswerViewModel();
    var actionResult;
    this.newAnswer.Instance = this._instance;
    this.newAnswer.IsCorrect = this._isCorrect;
    this.http.CreateAnswer(this.selectedQuestion.Guid, this.newAnswer).subscribe((x: boolean) => {
      actionResult = x;
      if (actionResult == true) {
        this.selectedQuestionAnswers.push(this.newAnswer);
        this.selectedQuestion.Answers = this.selectedQuestion.Answers;
        this._instance = '';
        this._isCorrect = null;
      }
    });

  }

  removeAnswer(_answerGuid: string)
  {
    var result;
    this.http.removeAnswer(_answerGuid).subscribe((x: boolean) => {
      result = x;
      if (result == true) {
        var deletedAnswer = this.selectedQuestionAnswers.find(x => x.Guid === _answerGuid);
        var deletedAnswerIndex = this.selectedQuestionAnswers.indexOf(deletedAnswer);
        if (deletedAnswerIndex !== -1)
        {
          this.selectedQuestionAnswers.splice(deletedAnswerIndex,1);
          }
        
      }
    });
  }

  addAnswer() {
    this.newAnswer = new AnswerViewModel();
    this.isShowAddAnswerDiv = true;
  }

  ngOnInit() {
    // this.GetAllTests();
    //  this.selectedQuestionAnswers = this.selectedQuestion.Answers;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedQuestion) {
      this.selectedQuestion = changes.selectedQuestion.currentValue;

      this.selectedQuestionAnswers = changes.selectedQuestionAnswers.currentValue;
    }
  }

}
