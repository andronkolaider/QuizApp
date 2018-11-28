import { Component, OnInit, Input } from '@angular/core';
import { TestViewModel } from 'src/assets/Models/Managing/TestViewModel';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http/http.service';
import { map,mergeMap } from 'rxjs/operators'
@Component({
  selector: 'app-passing-test',
  templateUrl: './passing-test.component.html',
  styleUrls: ['./passing-test.component.css']
})
export class PassingTestComponent implements OnInit {
  @Input() selectedTest: TestViewModel;
  testGuid: string;
  isShowWelcome: boolean = true;
  isShowTest: boolean = false;
  isShowResult: boolean = false;
  currentTest: TestViewModel;
  constructor(private route:ActivatedRoute,private http:HttpService) { }

  ngOnInit() {
    this.route.params.pipe(map(params => params['guid'])).subscribe((guid: string) => {
      this.http.GetAllTests().pipe(map((tests: TestViewModel[]) => {
        for (var i = 0; i < tests.length; i++){
          if (tests[i].Guid === guid) {
            this.currentTest = tests[i];
          }
        }
      })).subscribe();
    });
  }

}
