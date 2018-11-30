import { Component, OnInit, Input } from '@angular/core';
import { TestViewModel } from 'src/assets/Models/Managing/TestViewModel';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http/http.service';
import { map, mergeMap } from 'rxjs/operators'
import { QuestionViewModel } from 'src/assets/Models/Managing/QuestionViewModel';
import { TestingUrlViewModel } from 'src/assets/Models/Managing/TestingUrlViewModel';
import { TestPassingViewModel } from 'src/assets/Models/QuizPassing/TestPassingViewModel';
@Component({
  selector: 'app-passing-test',
  templateUrl: './passing-test.component.html',
  styleUrls: ['./passing-test.component.css']
})
export class PassingTestComponent implements OnInit {
  @Input() selectedTest: TestViewModel;
  testGuid: string;
  isShowWelcome: boolean = true;
  isShowTest: boolean = false;
  isShowResult: boolean = false;
  testingUrlGuid: string;
  currentTest: TestViewModel;
  currentQuestion: QuestionViewModel;
  currentQuestionIndex: number;
  testPassingResult: TestPassingViewModel=new TestPassingViewModel();
  constructor(private route: ActivatedRoute, private http: HttpService) { }

  startTest() {
    this.http.getInfoAndStartTest(this.testingUrlGuid).pipe(map(result => {
 
      this.testPassingResult.Guid = result['AttemptGuid'];
    }
    )).subscribe();
  }

  ngOnInit() {
    this.route.params.pipe(map(params => {
      this.testingUrlGuid = params['testGuid'];
      if (params['username']) {
        this.testPassingResult.Interviewee = params['username'];
      } else
      {
        this.testPassingResult.Interviewee = null;
        }
      this.http.getTestByTestingUrlGuid(this.testingUrlGuid).pipe(map((x: TestViewModel) => {
        this.currentTest = x;
      })).subscribe();
    })).subscribe();
    // this.route.params.subscribe(params => {
    //   this.testingUrlGuid = params['testGuid'];
    //   if (params['username'] !== undefined) {
    //     this.testPassingResult.Interviewee = params['username'];
    //   }
    //   this.http.getTestByTestingUrlGuid(this.testingUrlGuid).subscribe((x: TestViewModel) => this.currentTest = x);
    // });
  }
}