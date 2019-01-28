import { Component, OnInit} from '@angular/core';
import { LoginViewModel } from 'src/assets/Models/LoginViewModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isAdmin: boolean=false;
  isUser: boolean = false;
  currentUser: LoginViewModel;
  errorMessage: string;
  constructor() { }

  receiveIsAdmin($event) {
    this.isAdmin = $event;  
}

  receiveCurrentUser($event) {
    this.currentUser = $event;
  }
  
  receiveIsUser($event) {
    this.isUser = $event;
  }
  
  ngOnInit() {

  }

}
