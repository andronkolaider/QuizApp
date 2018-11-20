import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http/http.service';
import { LoginViewModel } from '/Users/Leobit user/Stuff/quiz/angular-quiz-app-frontend/src/assets/Models/LoginViewModel';
import { Title } from '@angular/platform-browser';
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
  IsLoginFailed: boolean = false;
  IsAdmin: boolean = false;
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

  ReturnZalupa(User: LoginViewModel)
  {
    this.http.ReturnZalupa(User).subscribe((x: LoginViewModel) => {
    this.CurrentUser = x;
      this.title.setTitle(this.CurrentUser.Username);
    });

  }

}