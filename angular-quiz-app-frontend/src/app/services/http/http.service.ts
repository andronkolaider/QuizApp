import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpHandler } from '@angular/common/http'
import { LoginViewModel } from '/Users/Leobit user/Stuff/quiz/angular-quiz-app-frontend/src/assets/Models/LoginViewModel'
import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';
import { stringify } from 'querystring';
import { AnswerViewModel } from 'src/assets/Models/Managing/AnswerViewModel';
import { NavigationExtras } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }
  //Login Page methods
  Login(Login:string,Password:string)
  {
    const body = { Username: Login, Password: Password };
    return this.http.post('http://localhost:53029/Account/Login/', body);
  }
//Admin page methods
  GetAllTests()
  {
    return this.http.get('http://localhost:53029/Admin/GetAllTests/');
  }

  GetAnswersByQuestionGuid(questionGuid: string)
  {
    const params = new HttpParams().set('string', questionGuid);
    return this.http.get('http://localhost:53029/Apilike/GetAnswersByQuestionGuid/', { params });
  }

  CreateAnswer(_questionGuid:string,_answer:AnswerViewModel)
  {
    let body = {
      questionGuid:_questionGuid , answer: {
      Instance: _answer.Instance,
      IsCorrect: _answer.IsCorrect,
      Guid: _answer.Guid
    } };
   return this.http.post('http://localhost:53029/Apilike/CreateAnswer/', body);
  }

  removeAnswer(_answerGuid: string)
  {
    
  return  this.http.post('http://localhost:53029/Apilike/RemoveAnswer', { answerGuid: _answerGuid });
  }

}
