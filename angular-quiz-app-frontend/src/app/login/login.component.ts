import { Component, OnInit, Output, EventEmitter,  } from '@angular/core';
import { HttpService } from '../services/http/http.service';
import { LoginViewModel } from '../../assets/Models/LoginViewModel'
import { Title } from '@angular/platform-browser';
import { TestViewModel } from '../../assets/Models/Managing/TestViewModel';
import { Location } from '@angular/common'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpService, private title: Title,private location:Location) { }

  CurrentUser: LoginViewModel = { Username: '', Password: '' };
  LoginInput: string;
  PasswordInput: string;
  IsLoginSuccessfull: boolean = false;
  IsAdmin: boolean = false;
  isUser:boolean = false;
  @Output() IsAdminEvent = new EventEmitter<boolean>();
  @Output() isUserEvent = new EventEmitter<boolean>();
  Tests: TestViewModel[] = [];

  sendIsAdmin() {
    this.IsAdminEvent.emit(this.IsAdmin);
  }

  sendIsUser() {
    this.isUserEvent.emit(this.isUser);
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
    this.sendIsAdmin();
    this.location.go('');
    this.isUser = false;
    this.sendIsUser();
  }

  Login(LoginInput, PasswordInput) {
    this.http.Login(LoginInput, PasswordInput).subscribe((x: LoginViewModel) => {
      this.CurrentUser = x;
      this.IsLoginSuccessfull = true;
      if (this.CurrentUser.Username == 'admin') {
        this.IsAdmin = true;
        this.sendIsAdmin();
      }

      else {
        this.isUser = true;
        this.sendIsUser();
      }
  
    });

    this.LoginInput = '';
    this.PasswordInput = '';
  }
}