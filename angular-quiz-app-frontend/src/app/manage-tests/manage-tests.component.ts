import { Component, OnInit } from '@angular/core';
import { TestViewModel } from 'src/assets/Models/Managing/TestViewModel';
import { HttpService } from '../services/http/http.service';

@Component({
  selector: 'app-manage-tests',
  templateUrl: './manage-tests.component.html',
  styleUrls: ['./manage-tests.component.css']
})
export class ManageTestsComponent implements OnInit {
  newTest: TestViewModel = new TestViewModel();
  testsList: TestViewModel[];
  isShowAddTest: boolean;
  dateTime: Date = new Date();
  constructor(private http: HttpService) { }
  showAddTestValueChange() {
    this.newTest = new TestViewModel();
    this.newTest.QuestionTimeLimit = '00:00';
    this.newTest.TestTimeLimit = '00:00';
    this.isShowAddTest = true;
  }

  removeTest(_test: TestViewModel) {
    this.http.removeTest(_test.Guid).subscribe((x: boolean) => {
      if (x) {
        this.http.getAllTests().subscribe((tests: TestViewModel[]) => this.testsList = tests);
      }
    });
}

  confirmAddTest() {
    this.http.createTest(this.newTest).subscribe((newTest: TestViewModel) => {
      if (newTest) {
        this.testsList.push(newTest);
        this.isShowAddTest = false;
        }
    });
  }

  addNewTest() {
    this.newTest = new TestViewModel();
    this.newTest.QuestionTimeLimit = '00:00';
    this.newTest.TestTimeLimit = '00:00';
    this.isShowAddTest = true;
  }

  cancelNewTest() {
    this.newTest = new TestViewModel();
    this.newTest.QuestionTimeLimit = '00:00';
    this.newTest.TestTimeLimit = '00:00';
    this.isShowAddTest = false;
  }

  ngOnInit() {
    this.http.getAllTests().subscribe((x: TestViewModel[]) => this.testsList = x);
  }

}
