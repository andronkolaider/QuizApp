import { Component} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  isAdmin: boolean=false;
  isUser: boolean = false;
 
  constructor(private location:Location) { }

  receiveIsAdmin($event) {
    this.isAdmin = $event;  
}

  reveiveIsUser($event) {
    this.isUser = $event;
  }

  back() {
    this.location.back();
  }
  
}
