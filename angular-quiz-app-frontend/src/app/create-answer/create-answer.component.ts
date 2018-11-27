import { Component, OnInit, Output, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { QuestionViewModel } from '../../assets/Models/Managing/QuestionViewModel';
import { AnswerViewModel } from '../../assets/Models/Managing/AnswerViewModel';
import { HttpService } from '../services/http/http.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-answer',
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.css']
})
export class CreateAnswerComponent implements OnInit, OnChanges {
  //  testsList: TestViewModel[];
  @Input()
  selectedQuestion!: QuestionViewModel;
    answersList: AnswerViewModel[];
  //  selectedTest: TestViewModel;
  // isShowTestQuestions: boolean = false;
  newAnswer: AnswerViewModel;
  _instance: string;
  _isCorrect: boolean;
  @Input() isShowAddAnswerDiv!: boolean;
  questionGuid: string;
  testGuid: string;
  constructor(private http: HttpService, private route:ActivatedRoute) { }

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
        this.selectedQuestion.Answers.push(this.newAnswer);
        this._instance = '';
        this._isCorrect = null;
      }
    });

  }

  removeAnswer(_answerGuid: string)
  {

    this.http.removeAnswer(_answerGuid).subscribe((x: boolean) => {
      if (x == true) {
        var deletedAnswer = this.selectedQuestion.Answers.find(z => z.Guid === _answerGuid);
        var deletedAnswerIndex = this.selectedQuestion.Answers.indexOf(deletedAnswer);
        if (deletedAnswerIndex !== -1)
        {
          this.selectedQuestion.Answers.splice(deletedAnswerIndex,1);
          }}
    });
  }

  addAnswer() {
    this.newAnswer = new AnswerViewModel();
    this.isShowAddAnswerDiv = true;
  }

  ngOnInit() {
    // this.GetAllTests();
    //  this.selectedQuestionAnswers = this.selectedQuestion.Answers;
    this.route.params.subscribe(params => {
      this.testGuid = params['testGuid'];
      this.questionGuid = params['questionGuid'];
      this.http.getQuestionsByTestGuid(this.testGuid).subscribe((x: QuestionViewModel[])=>{
        for (var i = 0; i < x.length; i++){
          if (x[i].Guid === this.questionGuid) {
            this.selectedQuestion = x[i];
          }
        }
        this.http.GetAnswersByQuestionGuid(this.selectedQuestion.Guid).subscribe((x: AnswerViewModel[]) => {
          this.selectedQuestion.Answers = x;
        });
      });
    });
 
  }

  ngOnChanges(changes: SimpleChanges) {
    // if (changes.selectedQuestion) {
    //   this.selectedQuestion = changes.selectedQuestion.currentValue;

    //   this.selectedQuestionAnswers = changes.selectedQuestionAnswers.currentValue;
    // }
  }

}
