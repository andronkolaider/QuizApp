import { Component, OnInit } from '@angular/core';
import { TestViewModel } from 'src/assets/Models/Managing/TestViewModel';
import { HttpService } from '../services/http/http.service';

@Component({
  selector: 'app-update-test',
  templateUrl: './update-test.component.html',
  styleUrls: ['./update-test.component.css']
})
export class UpdateTestComponent implements OnInit {
  testsList: TestViewModel[];
  selectedTest: TestViewModel;
  isShowTestEditDiv: boolean;
  constructor(private http:HttpService) { }

  selectTest(_test: TestViewModel) {
    this.selectedTest = _test;
}

  isShowTestEditDivValueChange() {
    this.isShowTestEditDiv = true;
}
  
  ngOnInit() {
    this.http.GetAllTests().subscribe((x: TestViewModel[]) => this.testsList = x);
  }

}
