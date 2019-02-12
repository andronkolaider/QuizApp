import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http/http.service';
import { TestingResultViewModel } from 'src/assets/Models/Managing/TestingResultViewModel';

@Component({
  selector: 'app-testing-results',
  templateUrl: './testing-results.component.html',
  styleUrls: ['./testing-results.component.css']
})
export class TestingResultsComponent implements OnInit {
  testingResults: TestingResultViewModel[];
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getAllTestResults().subscribe((x: TestingResultViewModel[]) => this.testingResults = x);
  }
}
