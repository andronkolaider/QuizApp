import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http/http.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private http: HttpService) { 
    
  }
  adminSelection: number;
  ngOnInit() {
  }

  GetAnswersByQuestionGuid(Guid: string)
  {

  }
}
