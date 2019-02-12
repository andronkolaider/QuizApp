import { Component, Input } from '@angular/core';
import { TestViewModel } from '../../assets/Models/Managing/TestViewModel';
import { HttpService } from '../services/http/http.service';
import { QuestionViewModel } from '../../assets/Models/Managing/QuestionViewModel';
import { AnswerViewModel } from '../../assets/Models/Managing/AnswerViewModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css'],
})
export class CreateQuestionComponent {
@Input()  selectedTest: TestViewModel;
  isShowAddQuestionDiv = false;
  isShowAddAnswer = false;
  newQuestion: QuestionViewModel;
  newAnswer: AnswerViewModel = new AnswerViewModel();
  selectedQuestion: QuestionViewModel;
  selectedQuestionAnswers: AnswerViewModel[];
  constructor(private http: HttpService, private router: Router) {
  }

  selectQuestion(_question: QuestionViewModel) {
    this.selectedQuestion = _question;
    this.selectedQuestionAnswers = this.selectedQuestion.Answers;
  }

  editAnswers(_testGuid: string, _questionGuid: string) {
    this.router.navigate(['admin-panel/edit-answers/' + _testGuid + '/' + _questionGuid]);
  }

  isShowAddQuestionValueChange() {
    this.isShowAddQuestionDiv = true;
    this.newQuestion = new QuestionViewModel();
    this.isShowAddAnswer = false;
  }

  isShowAddAnswerValueChange() {
    this.isShowAddAnswer = true;
    this.http.getAnswersByQuestionGuid(this.selectedQuestion.Guid).subscribe(
      (x: AnswerViewModel[]) => this.selectedQuestion.Answers = x);
}

  removeQuestion(_testGuid: string, _questionGuid: string) {
    let result;
    this.http.removeQuestion(_testGuid, _questionGuid).subscribe((x: boolean) => {
      result = x;
      if (result) {
        const index = this.selectedTest.Questions.findIndex(z => z.Guid === _questionGuid);
        this.selectedTest.Questions.splice(index, 1);
      }
    });
    this.isShowAddAnswer = false;
  }

  confirmAddQuestion(_question: QuestionViewModel) {
    this.http.createQuestion(this.selectedTest.Guid, _question).
      subscribe((newQuestion: QuestionViewModel) => {
        this.selectedTest.Questions.push(newQuestion);
      });
    this.isShowAddQuestionDiv = false;
    this.newQuestion = new QuestionViewModel();
    this.isShowAddAnswer = false;
  }
}
