import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http/http.service';
import { TestViewModel } from 'src/assets/Models/Managing/TestViewModel';
import { QuestionViewModel } from 'src/assets/Models/Managing/QuestionViewModel';
import { AnswerViewModel } from 'src/assets/Models/Managing/AnswerViewModel';
import { Guid } from 'guid-typescript'
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private http: HttpService) { 
    
  }
  adminSelection: number;
  ngOnInit() {
  }

  // GetAllTests()
  // {
  //   this.http.GetAllTests().subscribe((x: TestViewModel[]) => this.testsList = x);
  // }

  GetAnswersByQuestionGuid(Guid: string)
  {

  }

}
