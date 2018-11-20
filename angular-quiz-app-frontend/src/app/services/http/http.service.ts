import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpHandler } from '@angular/common/http'
import { LoginViewModel } from '/Users/Leobit user/Stuff/quiz/angular-quiz-app-frontend/src/assets/Models/LoginViewModel'
import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';
import { stringify } from 'querystring';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient,private Interceptor:InterceptorService) { }
  
  Login(Login:string,Password:string)
  {
    const body = { Username: Login, Password: Password };
    return this.http.post('http://localhost:53029/Account/Login/', body);
  }



  ReturnZalupa(User: LoginViewModel)
  {
 //  var path='http://localhost:53029/Admin/ReturnTest';
//   var invoke = new XMLHttpRequest();
    const params = new HttpParams().set('LoginViewModel', JSON.stringify(User));
   // var body = '<?xml version="1.0"?><LoginViewModel><UserName>Arun</Username><Password>123</Password></person>';
  //   if (invoke)
  //   {
  //     invoke.open('GET', path, true);
  //     invoke.send(body);
  // }
    
    return this.http.get('http://localhost:53029/Admin/ReturnTest', { params });
  }

}
