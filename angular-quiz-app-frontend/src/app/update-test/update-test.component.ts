import { Component, OnInit } from '@angular/core';
import { TestViewModel } from 'src/assets/Models/Managing/TestViewModel';
import { HttpService } from '../services/http/http.service';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-update-test',
  templateUrl: './update-test.component.html',
  styleUrls: ['./update-test.component.css']
})
export class UpdateTestComponent implements OnInit {
  testsList: TestViewModel[];
  selectedTest: TestViewModel;
  isShowTestEditDiv: boolean;
  testGuid: string;
  constructor(private http: HttpService, private route: ActivatedRoute,private router:Router) {
    this.route.params.subscribe(params => this.testGuid = params['guid']);
  }

  selectTest(_test: TestViewModel) {
    this.selectedTest = _test;
  }

  isShowTestEditDivValueChange() {
    this.isShowTestEditDiv = true;
  }


  ngOnInit() {
    this.http.GetAllTests().subscribe((x: TestViewModel[]) => {
    this.testsList = x;
    for (var i = 0; i < this.testsList.length; i++) {
      if (this.testsList[i].Guid === this.testGuid) {
        this.selectedTest = this.testsList[i];
      }
    }});  
  }

  confirmUpdateTest() {
    this.isShowTestEditDiv = false;
    this.http.updateTest(this.testGuid, this.selectedTest).subscribe(() =>
      this.router.navigate(['ManageTests'])
    );
    
}

}
