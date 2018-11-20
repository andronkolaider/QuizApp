import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http/http.service';
import { LoginViewModel } from '/Users/Leobit user/Stuff/quiz/angular-quiz-app-frontend/src/assets/Models/LoginViewModel';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { TestViewModel } from 'src/assets/Models/Managing/TestViewModel';
import { NgForOf } from '@angular/common'
import { TestingResultViewModel } from 'src/assets/Models/Managing/TestingResultViewModel';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpService,private title:Title) { }

  CurrentUser: LoginViewModel = { Username: '', Password: '' };
  LoginInput: string;
  PasswordInput: string;
  IsLoginSuccessfull: boolean = false;
  IsAdmin: boolean = false;
  Tests: TestViewModel[]=[];
  ngOnInit() {
  }

  Logout() {
    this.IsLoginSuccessfull = false;
    this.IsAdmin = false;
    this.CurrentUser.Username = '';
    this.CurrentUser.Password = '';
    this.LoginInput = '';
    this.PasswordInput = '';
  }

  Login(LoginInput, PasswordInput) {
    this.http.Login(LoginInput, PasswordInput).subscribe((x: LoginViewModel) => {
      this.CurrentUser = x;
      this.IsLoginSuccessfull = true;
    });
    this.LoginInput = '';
    this.PasswordInput = '';
  }

  ReturnZalupa()
  {
    this.http.GetAllTests().subscribe((x: TestViewModel[]) => this.Tests = x);

  }

}