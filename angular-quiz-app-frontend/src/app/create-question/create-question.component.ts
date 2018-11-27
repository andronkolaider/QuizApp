import { Component, OnInit, Input } from '@angular/core';
import { TestViewModel } from '../../assets/Models/Managing/TestViewModel';
import { HttpService } from '../services/http/http.service';
import { QuestionViewModel } from '../../assets/Models/Managing/QuestionViewModel';
import { AnswerViewModel } from '../../assets/Models/Managing/AnswerViewModel';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css'],
  
})
export class CreateQuestionComponent implements OnInit {
 // testsList: TestViewModel[];
@Input()  selectedTest: TestViewModel;
  isShowAddQuestionDiv: boolean = false;
  isShowAddAnswer: boolean = false;
  newQuestion: QuestionViewModel;
  newAnswer: AnswerViewModel = new AnswerViewModel();
  selectedQuestion: QuestionViewModel;
  selectedQuestionAnswers: AnswerViewModel[];
  constructor(private http: HttpService, private router:Router) {
  }

  selectQuestion(_question: QuestionViewModel) {
    this.selectedQuestion = _question;
    this.selectedQuestionAnswers = this.selectedQuestion.Answers;
   // this.title.setTitle(this.selectedQuestion.Answers.length.toString());
  }

  editAnswers(_testGuid:string,_questionGuid:string) {
    this.router.navigate(['EditAnswers/'+_testGuid+'/'+_questionGuid]);
  }

  isShowAddQuestionValueChange() {
    this.isShowAddQuestionDiv = true;
    this.newQuestion = new QuestionViewModel();
    this.isShowAddAnswer = false;
  }

  isShowAddAnswerValueChange() {
    this.isShowAddAnswer = true;
    this.http.GetAnswersByQuestionGuid(this.selectedQuestion.Guid).subscribe(
      (x: AnswerViewModel[]) => this.selectedQuestion.Answers = x);
}

  removeQuestion(_testGuid: string, _questionGuid: string) {
    var result;
    this.http.removeQuestion(_testGuid, _questionGuid).subscribe((x: boolean) => {
      result = x;
      if (result == true)
      {
        var index = this.selectedTest.Questions.findIndex(z => z.Guid == _questionGuid);
        this.selectedTest.Questions.splice(index,1);
      }
    });
    this.isShowAddAnswer = false;
  }

  confirmAddQuestion(_question: QuestionViewModel) {
    this.http.createQuestion(this.selectedTest.Guid, _question).
      subscribe((x: QuestionViewModel) => {
        this.selectedTest.Questions.push(x);
      });
    this.isShowAddQuestionDiv = false;
    this.newQuestion = new QuestionViewModel();
    this.isShowAddAnswer = false;
  }

  ngOnInit() {
  }

}
