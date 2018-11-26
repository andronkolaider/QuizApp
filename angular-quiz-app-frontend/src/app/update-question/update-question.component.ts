import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http/http.service';
import { TestViewModel } from 'src/assets/Models/Managing/TestViewModel';
import { QuestionViewModel } from 'src/assets/Models/Managing/QuestionViewModel';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
  testsList: TestViewModel[];
  selectedTest: TestViewModel;
  questionsList: QuestionViewModel[];
  selectedQuestion: QuestionViewModel;
  constructor(private http:HttpService) { }

  selectTest(_test: TestViewModel)
 {
    this.selectedTest = _test;
    this.questionsList = this.selectedTest.Questions;
}

  selectQuestion(_question: QuestionViewModel) {
    this.selectedQuestion = _question;
  }
  
  getAllTests() {
    this.http.GetAllTests().subscribe((x: TestViewModel[]) => this.testsList = x);
}

  confirmEdit() {
    this.http.updateQuestion(this.selectedQuestion).subscribe();
    this.selectedQuestion = null;
  }
  
  ngOnInit() {
    this.getAllTests();
  }

}
