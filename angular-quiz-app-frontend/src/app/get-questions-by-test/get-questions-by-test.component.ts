import { Component, OnInit } from '@angular/core';
import { TestViewModel } from '../../assets/Models/Managing/TestViewModel';
import { HttpService } from '../services/http/http.service';

@Component({
  selector: 'app-get-questions-by-test',
  templateUrl: './get-questions-by-test.component.html'
  // styleUrls: ['./get-questions-by-test.component.css']
})
export class GetQuestionsByTestComponent implements OnInit {

  testsList: TestViewModel[];
  selectedTest: TestViewModel;
  selectedTestQuestionsList: TestViewModel[];
  isShowTestAnswers = false;

  constructor(private http: HttpService) { }

  isShowTestAnswersValueChange(test: TestViewModel) {
    if (this.isShowTestAnswers) {
      this.isShowTestAnswers = false;
    } else {
      this.selectedTest = test;
      this.isShowTestAnswers = true;
    }
  }

  getAllTests() {
    this.http.getAllTests().subscribe((x: TestViewModel[]) => this.testsList = x);
  }

  ngOnInit() {
    this.getAllTests();
  }

}
