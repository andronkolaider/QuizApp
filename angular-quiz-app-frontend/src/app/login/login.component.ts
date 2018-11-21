import { Component, OnInit, Output,EventEmitter, ViewChild } from '@angular/core';
import { HttpService } from '../services/http/http.service';
import { LoginViewModel } from '/Users/Leobit user/Stuff/quiz/angular-quiz-app-frontend/src/assets/Models/LoginViewModel';
import { Title } from '@angular/platform-browser';
import { TestViewModel } from 'src/assets/Models/Managing/TestViewModel';


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
  @Output() IsAdminEvent = new EventEmitter<boolean>();
  Tests: TestViewModel[] = [];
 
  sendIsAdmin()
  {
    this.IsAdminEvent.emit(this.IsAdmin);
  }

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
      if (this.CurrentUser.Username == 'admin')
      {
        this.IsAdmin = true;
      }
      this.sendIsAdmin();
    });

    this.LoginInput = '';
    this.PasswordInput = '';
  }
}