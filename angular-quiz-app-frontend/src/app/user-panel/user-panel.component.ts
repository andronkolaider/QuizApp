import { Component, OnInit } from '@angular/core';
import { TestViewModel } from 'src/assets/Models/Managing/TestViewModel';
import { HttpService } from '../services/http/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  testsList: TestViewModel[];
  selectedTest: TestViewModel;
  isTestStarted = false;
  currentUserName: string;
  constructor(private http: HttpService,
    private router: Router) { }

  ngOnInit() {
    this.getAllTests();
    this.currentUserName = sessionStorage.getItem('username');
  }

  startTest(_test: TestViewModel) {
    this.selectedTest = _test;
    sessionStorage.setItem('testGuid', this.selectedTest.Guid);
    sessionStorage.setItem('username', this.currentUserName);
    this.router.navigate(['test-passing']);
  }

  getAllTests() {
    this.http.getAllTests().subscribe((x: TestViewModel[]) => this.testsList = x);
  }
}
