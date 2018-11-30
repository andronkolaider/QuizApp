import { Component, OnInit } from '@angular/core';
import { TestViewModel } from 'src/assets/Models/Managing/TestViewModel';
import { HttpService } from '../services/http/http.service';
import { LoginViewModel } from 'src/assets/Models/LoginViewModel';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  testsList: TestViewModel[];
  selectedTest: TestViewModel;
  isTestStarted: boolean = false;
  currentUserName: string;
  constructor(private http: HttpService,private router:Router,private route:ActivatedRoute,private location:Location) { }

  ngOnInit() {
    this.getAllTests();
    this.route.params.subscribe(params => this.currentUserName = params['username']);
  }

  startTest() {
   
    var path = 'UserPanel/TestPassing/' + this.selectedTest.Guid + '/' + this.currentUserName;
    this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([path]);

    console.log(this.router.events);


   // this.location.replaceState('UserPanel/TestPassing');
  }

  selectTest(_test: TestViewModel) {
    this.selectedTest = _test;
  }

  getAllTests() {
    this.http.GetAllTests().subscribe((x: TestViewModel[]) => this.testsList = x);
  }

}
