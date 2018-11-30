import { Component, OnInit } from '@angular/core';
import { TestViewModel } from 'src/assets/Models/Managing/TestViewModel';
import { HttpService } from '../services/http/http.service';
import { Title } from '@angular/platform-browser';


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
  constructor(private http:HttpService,private title:Title) { }
 
  showAddTestValueChange() {
    this.newTest = new TestViewModel();
    this.newTest.QuestionTimeLimit = '00:00';
    this.newTest.TestTimeLimit = '00:00';
    this.isShowAddTest = true;
  }

  removeTest(_test:TestViewModel) {
    this.http.removeTest(_test.Guid).subscribe((x: boolean) => {
      if (x === true) {
        this.http.GetAllTests().subscribe((x: TestViewModel[]) => this.testsList = x);
      }
    });
}

  confirmAddTest() {
    this.http.createTest(this.newTest).subscribe((x: TestViewModel) => {
      if (x!==undefined)
      {
        this.testsList.push(x);
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
    this.http.GetAllTests().subscribe((x: TestViewModel[]) => this.testsList = x);
  }

}
