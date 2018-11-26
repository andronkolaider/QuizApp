import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpHandler } from '@angular/common/http'
import { AnswerViewModel } from 'src/assets/Models/Managing/AnswerViewModel';
import { QuestionViewModel } from 'src/assets/Models/Managing/QuestionViewModel';
import { TestViewModel } from 'src/assets/Models/Managing/TestViewModel';
import { noConflict } from 'q';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }
  //Login Page methods
  Login(Login: string, Password: string) {
    const body = { Username: Login, Password: Password };
    return this.http.post('http://localhost:53029/Account/Login/', body);
  }
  //Admin page methods
  GetAllTests() {
    return this.http.get('http://localhost:53029/Admin/GetAllTests/');
  }

  GetAnswersByQuestionGuid(questionGuid: string) {
    const params = new HttpParams().set('string', questionGuid);
    return this.http.get('http://localhost:53029/Apilike/GetAnswersByQuestionGuid/', { params });
  }

  CreateAnswer(_questionGuid: string, _answer: AnswerViewModel) {
    let body = {
      questionGuid: _questionGuid, answer: {
        Instance: _answer.Instance,
        IsCorrect: _answer.IsCorrect,
        Guid: _answer.Guid //fix
      }
    };
    return this.http.post('http://localhost:53029/Apilike/CreateAnswer/', body);
  }

  createQuestion(_testGuid: string, _question: QuestionViewModel) {
    let body = {
      testGuid: _testGuid,
      question: {
        Instance: _question.Instance,
        Hint: _question.Hint,
        Answers: null,
        IsValid: false
      }
    };
    return this.http.post('http://localhost:53029/Apilike/CreateQuestion/', body);
  }

  removeQuestion(_testGuid: string, _questionGuid: string) {
    return this.http.post('http://localhost:53029/Apilike/RemoveQuestion/', { testGuid: _testGuid, questionGuid: _questionGuid });
  }

  removeAnswer(_answerGuid: string) {
    return this.http.post('http://localhost:53029/Apilike/RemoveAnswer', { answerGuid: _answerGuid });
  }

  updateQuestion(_question: QuestionViewModel) {
    const body = {
      questionGuid: _question.Guid,
      question: {
        Instance: _question.Instance,
        Hint: _question.Hint,
        IsValid: _question.IsValid,
        Guid:_question.Guid
      }
    };
    return this.http.post('http://localhost:53029/Apilike/UpdateQuestion/', body);
  }

  createTest(_test: TestViewModel) {
    const body = {
      test: {
        Name: _test.Name,
        Description: _test.Description,
        TestTimeLimit: _test.TestTimeLimit,
        QuestionTimeLimit: _test.QuestionTimeLimit,
        Questions: null,
        Guid: null,
        IsValid:null
      }
    };
  return  this.http.post('http://localhost:53029/Apilike/CreateTest/', body);
  }

  removeTest(_testGuid: string) { 
    return this.http.post('http://localhost:53029/Apilike/RemoveTest/', {
      testGuid:_testGuid
    });
  }


}
