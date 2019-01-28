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
  selectedTest: TestViewModel = new TestViewModel();;
  allowedStartDate: string;
  allowedStartTime: string='00:00';
  allowedEndDate: string;
  allowedEndTime: string='00:00';
  isShowAddTestUrl: boolean = false;
  isShowTests: boolean;
  constructor(private http: HttpService) {
    this.newTestingUrl.TestName = '';
    this.newTestingUrl.NumberOfRuns = 0;
    this.selectedTest.Name = '';
  }

  createTestUrl() {
    this.newTestingUrl = new TestingUrlViewModel();
    this.newTestingUrl.TestName = '';
    this.newTestingUrl.NumberOfRuns = 0;
    this.newTestingUrl.AllowedStartDate = this.allowedStartDate + ' ' + this.allowedStartTime;
    this.newTestingUrl.AllowedEndDate = this.allowedEndDate + ' ' + this.allowedEndTime;
    this.newTestingUrl.TestGuid = this.selectedTest.Guid;
    this.newTestingUrl.TestName = this.selectedTest.Name;
    this.http.createTestingUrl(this.newTestingUrl).subscribe(() => {
      this.http.getAllTestingUrls().subscribe((z: TestingUrlViewModel[]) => this.testingUrlList = z);
      this.selectedTest = new TestViewModel();
      this.selectedTest.Name = '';
      this.isShowAddTestUrl = false;
      this.isShowTests = false;
      this.http.getAllTestingUrls().subscribe((x: TestingUrlViewModel[]) => {
        this.testingUrlList = x;
        for (var i = 0; i < this.testingUrlList.length; i++){
          this.testingUrlList[i].UrlInstance = 'http://localhost:4200/test-passing/' + this.testingUrlList[i].Guid;
        }
      });
      this.http.getAllTests().subscribe((x: TestViewModel[]) => this.testsList = x);
    });
  }
  
  addTestUrl()
  {
    this.isShowAddTestUrl = true;
    this.isShowTests = true;
    this.selectedTest = new TestViewModel();
  }

  removeTestingUrl(_testingUrlGuid: string) {
    this.http.removeTestingUrl(_testingUrlGuid).subscribe(() => {
      this.http.getAllTestingUrls().subscribe((z: TestingUrlViewModel[]) => this.testingUrlList = z);
    });
  }

  selectTest(_test:TestViewModel) {
    this.selectedTest = _test;
  }
  
  ngOnInit() {
    this.http.getAllTestingUrls().subscribe((x: TestingUrlViewModel[]) => {
      this.testingUrlList = x;
      for (var i = 0; i < this.testingUrlList.length; i++){
        this.testingUrlList[i].UrlInstance = 'localhost:4200/test-passing/' + this.testingUrlList[i].Guid;
      }
    });
    this.http.getAllTests().subscribe((x: TestViewModel[]) => this.testsList = x);  
  }

  copyLink(_testingUrl:TestingUrlViewModel) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value =document.domain+":4200"+"/test-passing/"+_testingUrl.Guid;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    var snackbar = document.getElementById("snackbar");
    snackbar.innerHTML = "Link copied successfully";
    snackbar.className = "show";
    setTimeout(() => {
      snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
  }

}
