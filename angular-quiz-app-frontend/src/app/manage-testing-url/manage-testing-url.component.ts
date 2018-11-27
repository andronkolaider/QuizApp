import { Component, OnInit } from '@angular/core';
import { TestingUrlViewModel } from 'src/assets/Models/Managing/TestingUrlViewModel';
import { HttpService } from '../services/http/http.service';
import { TestViewModel } from 'src/assets/Models/Managing/TestViewModel';

@Component({
  selector: 'app-manage-testing-url',
  templateUrl: './manage-testing-url.component.html',
  styleUrls: ['./manage-testing-url.component.css']
})
export class ManageTestingUrlComponent implements OnInit {
  newTestingUrl: TestingUrlViewModel = new TestingUrlViewModel();
  testingUrlList: TestingUrlViewModel[];
  testsList: TestViewModel[];
  selectedTest: TestViewModel;
  allowedStartDate: string;
  allowedStartTime: string;
  allowedEndDate: string;
  allowedEndTime: string;
  constructor(private http:HttpService) { }

  createTestUrl() {
    this.newTestingUrl = new TestingUrlViewModel();
    this.newTestingUrl.AllowedStartDate = this.allowedStartDate + ' ' + this.allowedStartTime;
    this.newTestingUrl.AllowedEndDate = this.allowedEndDate + ' ' + this.allowedEndTime;
    this.newTestingUrl.UrlInstance = 'localhost:4200/TestPassing/' + this.selectedTest.Guid;
    this.newTestingUrl.TestGuid = this.selectedTest.Guid;
    this.newTestingUrl.TestName = this.selectedTest.Name;
    this.http.createTestingUrl(this.newTestingUrl).subscribe();
}

  selectTest(_test:TestViewModel) {
    this.selectedTest = _test;
  }
  
  ngOnInit() {
    this.http.getAllTestingUrls().subscribe((x: TestingUrlViewModel[]) => this.testingUrlList = x);
    this.http.GetAllTests().subscribe((x: TestViewModel[]) => this.testsList = x);
  }

}
