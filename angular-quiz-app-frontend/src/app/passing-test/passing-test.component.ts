import { Component, OnInit } from '@angular/core';
import { TestViewModel } from 'src/assets/Models/Managing/TestViewModel';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http/http.service';
import { map } from 'rxjs/operators';
import { QuestionViewModel } from 'src/assets/Models/Managing/QuestionViewModel';
import { TestPassingViewModel } from 'src/assets/Models/QuizPassing/TestPassingViewModel';
import { Title } from '@angular/platform-browser';
import { AnswerViewModel } from 'src/assets/Models/Managing/AnswerViewModel';
import { ChoicePassingViewModel } from 'src/assets/Models/QuizPassing/ChoicePassingViewModel';
import { TestingResultViewModel } from 'src/assets/Models/Managing/TestingResultViewModel';
@Component({
  selector: 'app-passing-test',
  templateUrl: './passing-test.component.html',
  styleUrls: ['./passing-test.component.css']
})
export class PassingTestComponent implements OnInit {
  testGuid: string;
  isShowWelcome = true;
  isShowTest = false;
  isShowResult = false;
  testingUrlGuid: string;
  username: string;
  selectedAnswer: AnswerViewModel;
  currentTest: TestViewModel;
  currentQuestion: QuestionViewModel;
  currentQuestionIndex: number;
  testPassingResult: TestPassingViewModel = new TestPassingViewModel();
  timePerQuestion: number;
  timeLeft: number;
  interval: any;
  duration = 0;
  interviewee = '';
  isMultipleAnswers: boolean;
  multipleAnswers: AnswerViewModel[] = [];
  result: TestingResultViewModel;
  constructor(private route: ActivatedRoute, private http: HttpService, private title: Title) { }

  startTest() {
    if (this.testingUrlGuid) {
      this.http.getInfoAndStartTest(this.testingUrlGuid).pipe(map(result => {
        this.isShowWelcome = false;
        this.isShowTest = true;

        this.testPassingResult.Guid = result['AttemptGuid'];
        this.testPassingResult.Score = 0;
        this.testPassingResult.QuestionTried = 0;
        this.testPassingResult.TestingStartDateTime = new Date().toISOString();
        this.currentQuestionIndex = 0;
        this.testPassingResult.Questions = [];
        this.testPassingResult.TestingGuid = this.testingUrlGuid;
        this.currentQuestion = this.currentTest.Questions[this.currentQuestionIndex];
        this.http.getAnswersByQuestionGuid(this.currentQuestion.Guid).pipe(map((answers: AnswerViewModel[]) => {
          this.currentQuestion.Answers = answers;
          this.isMultipleAnswers = this.isMultiple(this.currentQuestion);
          this.timeLeft = Number.parseInt(this.currentTest.QuestionTimeLimit.split(':')[0]) * 3600 +
            Number.parseInt(this.currentTest.QuestionTimeLimit.split(':')[1]) * 60 +
            Number.parseInt(this.currentTest.QuestionTimeLimit.split(':')[2]);
          this.timePerQuestion = this.timeLeft;
          this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
              this.timeLeft--;
            } else {
              this.nextQuestion();
            }
          }, 1000);
        })).subscribe();

      }
      )).subscribe();
    }
  }

  selectMultipleAnswers(answer: AnswerViewModel) {
    for (let i = 0; i < this.multipleAnswers.length; i++){
      if (this.multipleAnswers[i].Guid === answer.Guid) {
        this.multipleAnswers.splice(this.multipleAnswers.indexOf(answer));
        return;
      }
    }
    this.multipleAnswers.push(answer);
}

  selectAnswer(answer: AnswerViewModel) {
    this.selectedAnswer = answer;
  }

  nextQuestion() {
    clearInterval(this.interval);
    this.testPassingResult.QuestionTried += 1;
    const choise: ChoicePassingViewModel = new ChoicePassingViewModel();
    choise.QuestionGuid = this.currentTest.Questions[this.currentQuestionIndex].Guid;
    choise.AnswersSelected = [];
    this.duration += this.timePerQuestion - this.timeLeft;
    if (this.isMultipleAnswers) {
      for (let i = 0; i < this.multipleAnswers.length; i++){
        choise.AnswersSelected.push(this.multipleAnswers[i].Guid);
      }
    } else {
      if (this.selectedAnswer) {
        choise.AnswersSelected.push(this.selectedAnswer.Guid);
      }
    }
    this.testPassingResult.Questions.push(choise);
    if (this.currentQuestionIndex < (this.currentTest.Questions.length - 1)) {
      this.currentQuestionIndex++;
      this.currentQuestion = this.currentTest.Questions[this.currentQuestionIndex];
      this.isMultipleAnswers = this.isMultiple(this.currentQuestion);
      this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.nextQuestion();
        }
      }, 1000);
      this.timeLeft = Number.parseInt(this.currentTest.QuestionTimeLimit.split(':')[0]) * 3600 +
        Number.parseInt(this.currentTest.QuestionTimeLimit.split(':')[1]) * 60 +
        Number.parseInt(this.currentTest.QuestionTimeLimit.split(':')[2]);
    } else {
      let stringDuration;
      if (this.duration < 60) {

         stringDuration = '00:00:' + this.duration.toString();

      } else if (this.duration < 3600) {
         stringDuration = '00:' + (this.duration / 60).toString().split('.')[0] + (this.duration % 60).toString();
      }
      this.testPassingResult.Duration = stringDuration;

      this.isShowTest = false;
      this.isShowResult = true;
      this.testPassingResult.Interviewee = this.interviewee;
      this.testPassingResult.TestingEndDateTime = new Date().toISOString();

      this.http.finishTest(this.testPassingResult).subscribe(() => {
        this.http.getAllTestResults().subscribe((x: TestingResultViewModel[]) => this.result = x.pop())
      });
    }
  }

  isMultiple(_question: QuestionViewModel) {
    let temp = 0;
    for (let i = 0; i < _question.Answers.length; i++){
      if (_question.Answers[i].IsCorrect) {
        temp++;
      }
    }
    return temp > 1 ? true : false;
}

  ngOnInit() {
    this.route.params.pipe(map(params => {
      this.testingUrlGuid = params['testingUrlGuid'];
      if (this.testingUrlGuid) {
        this.http.getTestByTestingUrlGuid(this.testingUrlGuid).pipe(map((x: TestViewModel) => {
          this.currentTest = x;
        })).subscribe();
      }
    })).subscribe();
  }
}
