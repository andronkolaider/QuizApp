import { Component, OnInit, Input } from '@angular/core';
import { QuestionViewModel } from '../../assets/Models/Managing/QuestionViewModel';
import { AnswerViewModel } from '../../assets/Models/Managing/AnswerViewModel';
import { HttpService } from '../services/http/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-answer',
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.css']
})
export class CreateAnswerComponent implements OnInit {
  @Input()
  selectedQuestion!: QuestionViewModel;
  answersList: AnswerViewModel[];
  newAnswer: AnswerViewModel;
  instance: string;
  isCorrect: boolean;
  @Input() isShowAddAnswerDiv!: boolean;
  questionGuid: string;
  testGuid: string;
  constructor(private http: HttpService,
    private route: ActivatedRoute) { }

  isShowAddAnswerDivValueChange() {
    this.isShowAddAnswerDiv = true;
  }

  CreateAnswer() {
    this.newAnswer = new AnswerViewModel();
    let actionResult;
    this.newAnswer.Instance = this.instance;
    this.newAnswer.IsCorrect = this.isCorrect;
    this.http.createAnswer(this.selectedQuestion.Guid, this.newAnswer).subscribe((isSuccess: boolean) => {
      actionResult = isSuccess;
      if (actionResult) {
        this.selectedQuestion.Answers.push(this.newAnswer);
        this.instance = '';
        this.isCorrect = null;
      }
    });
  }

  removeAnswer(_answerGuid: string) {
    this.http.removeAnswer(_answerGuid).subscribe((x: boolean) => {
      if (x) {
        const deletedAnswer = this.selectedQuestion.Answers.find(z => z.Guid === _answerGuid);
        const deletedAnswerIndex = this.selectedQuestion.Answers.indexOf(deletedAnswer);
        if (deletedAnswerIndex !== -1) {
          this.selectedQuestion.Answers.splice(deletedAnswerIndex, 1);
        }
      }
    });
  }

  addAnswer() {
    this.newAnswer = new AnswerViewModel();
    this.isShowAddAnswerDiv = true;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.testGuid = params['testGuid'];
      this.questionGuid = params['questionGuid'];
      this.http.getQuestionsByTestGuid(this.testGuid).subscribe((x: QuestionViewModel[]) => {
        for (let i = 0; i < x.length; i++) {
          if (x[i].Guid === this.questionGuid) {
            this.selectedQuestion = x[i];
          }
        }
        this.http.getAnswersByQuestionGuid(this.selectedQuestion.Guid).subscribe((answers: AnswerViewModel[]) => {
          this.selectedQuestion.Answers = answers;
        });
      });
    });
  }
}
