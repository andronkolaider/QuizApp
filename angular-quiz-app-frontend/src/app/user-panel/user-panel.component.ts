import { Component, OnInit } from '@angular/core';
import { TestViewModel } from 'src/assets/Models/Managing/TestViewModel';
import { HttpService } from '../services/http/http.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  testsList: TestViewModel[];
  selectedTest: TestViewModel;
  isTestStarted: boolean = false;
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getAllTests();
  }

  startTest() {
    this.isTestStarted = true;
  }

  selectTest(_test: TestViewModel) {
    this.selectedTest = _test;
  }

  getAllTests() {
    this.http.GetAllTests().subscribe((x: TestViewModel[]) => this.testsList = x);
  }

}
