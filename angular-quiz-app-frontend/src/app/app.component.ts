import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  isAdmin: boolean;

 

  constructor() { }

  receiveIsAdmin($event) {
    this.isAdmin = $event;
}

}
