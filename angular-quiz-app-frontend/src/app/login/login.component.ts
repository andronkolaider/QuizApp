import { Component, OnInit, Output, EventEmitter,  } from '@angular/core';
import { HttpService } from '../services/http/http.service';
import { LoginViewModel } from '../../assets/Models/LoginViewModel'
import { TestViewModel } from '../../assets/Models/Managing/TestViewModel';
import { Location } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpService, private router: Router,private location:Location) { }

  currentUser: LoginViewModel = { Username: '', Password: '' };
  loginInput: string;
  passwordInput: string;
  isLoginSuccessfull: boolean = false;
  isAdmin: boolean = false;
  isUser: boolean = false;
  @Output() isAdminEvent = new EventEmitter<boolean>();
  @Output() isUserEvent = new EventEmitter<boolean>();
  @Output() currentUserEvent = new EventEmitter<LoginViewModel>();
  tests: TestViewModel[] = [];

  sendisAdmin() {
    this.isAdminEvent.emit(this.isAdmin);
  }

  sendIsUser() {
    this.isUserEvent.emit(this.isUser);
  }

  sendUser() {
    this.currentUserEvent.emit(this.currentUser);
}

  ngOnInit() {
    if (sessionStorage.getItem('login') != "") {
      var user = sessionStorage.getItem('login');
      this.currentUser.Username = user;
      if (user === 'admin') {
        this.isLoginSuccessfull = true;
        this.isAdmin = true;
        this.sendisAdmin();
        if (this.isAdmin == true) {
          if (sessionStorage.getItem("redirected") == "") {
            sessionStorage.setItem("redirected", "true");
            this.router.navigate(['admin-panel']);
          }
        }
      }
      else {
        this.sendUser();
      }
    }
  }

  logout() {
    this.isLoginSuccessfull = false;
    this.isAdmin = false;
    this.currentUser.Username = '';
    this.currentUser.Password = '';
    this.loginInput = '';
    this.passwordInput = '';
    this.sendisAdmin();
    this.isUser = false;
    this.sendIsUser();
    sessionStorage.clear();
    sessionStorage.setItem("redirected", "");
    document.cookie = "adminCookie= ";
    this.location.go('');
  }

  login(loginInput, passwordInput) {
  

    this.http.login(loginInput, passwordInput).subscribe((x) => {
      if (x != null) {
        this.currentUser.Username = x["username"];
        this.currentUser.Password = x["password"];
        if (document.cookie.includes("adminCookie=admin")) {
          sessionStorage.setItem("login", x["username"]);
          this.isAdmin = true;
          this.isLoginSuccessfull = true;
          this.sendisAdmin();
          if (this.isAdmin == true) {
            sessionStorage.setItem("redirected", "true");
            this.router.navigate(['admin-panel']);
           }
        }
        }

      });


  }
}