import { Component, OnInit, Input } from '@angular/core';
import { TestViewModel } from 'src/assets/Models/Managing/TestViewModel';

@Component({
  selector: 'app-passing-test',
  templateUrl: './passing-test.component.html',
  styleUrls: ['./passing-test.component.css']
})
export class PassingTestComponent implements OnInit {
 @Input() selectedTest: TestViewModel;
  constructor() { }

  ngOnInit() {
  }

}
