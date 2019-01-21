import { Component, OnInit, Output, EventEmitter,  } from '@angular/core';
import { HttpService } from '../services/http/http.service';
import { LoginViewModel } from '../../assets/Models/LoginViewModel'
import { TestViewModel } from '../../assets/Models/Managing/TestViewModel';
import { Location } from '@angular/common'
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import * as jwt_decode from "jwt-decode";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpService, private router: Router,private location:Location,private title:Title) { }

  CurrentUser: LoginViewModel = { Username: '', Password: '' };
  LoginInput: string;
  PasswordInput: string;
  IsLoginSuccessfull: boolean = false;
  IsAdmin: boolean = false;
  isUser: boolean = false;
  tokentInfo;
  @Output() IsAdminEvent = new EventEmitter<boolean>();
  @Output() isUserEvent = new EventEmitter<boolean>();
  @Output() currentUserEvent = new EventEmitter<LoginViewModel>();
  Tests: TestViewModel[] = [];

  sendIsAdmin() {
    this.IsAdminEvent.emit(this.IsAdmin);
  }

  sendIsUser() {
    this.isUserEvent.emit(this.isUser);
  }

  sendUser() {
    this.currentUserEvent.emit(this.CurrentUser);
}

  ngOnInit() {
    if (sessionStorage.getItem('login')) {
      var user = sessionStorage.getItem('login');
      this.CurrentUser.Username = user;
      this.IsLoginSuccessfull = true;
      if (user === 'admin') {
        this.IsAdmin = true;
        this.sendIsAdmin();
        if (this.IsAdmin == true) {
          this.router.navigate(['admin-panel']);
        }
      }
      else {
        this.sendUser();
        this.router.navigate(['user-panel/']);
      }
    }
  }

  Logout() {
    this.IsLoginSuccessfull = false;
    this.IsAdmin = false;
    this.CurrentUser.Username = '';
    this.CurrentUser.Password = '';
    this.LoginInput = '';
    this.PasswordInput = '';
    this.sendIsAdmin();
    this.isUser = false;
    this.sendIsUser();
    sessionStorage.clear();

    document.cookie = "adminCookie= ";

    this.location.go('');
  
  
  }

  Login(LoginInput, PasswordInput) {
  

      this.http.Login(LoginInput, PasswordInput).subscribe((x) => {
        this.CurrentUser.Username = x["username"];
        this.CurrentUser.Password = x["password"];
        var cookies= document.cookie.split(";");
        if (cookies.includes("adminCookie=admin")) {
          this.IsAdmin = true;
          this.IsLoginSuccessfull = true;
          this.sendIsAdmin();
           if (this.IsAdmin == true) {
            this.router.navigate(['admin-panel']);
           }
        }
      });


  }
}