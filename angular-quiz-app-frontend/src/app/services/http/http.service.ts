import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http'
import { AnswerViewModel } from 'src/assets/Models/Managing/AnswerViewModel';
import { QuestionViewModel } from 'src/assets/Models/Managing/QuestionViewModel';
import { TestViewModel } from 'src/assets/Models/Managing/TestViewModel';
import { TestingUrlViewModel } from 'src/assets/Models/Managing/TestingUrlViewModel';
import { TestPassingViewModel } from 'src/assets/Models/QuizPassing/TestPassingViewModel';
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
    const params = new HttpParams().set('questionGuid', questionGuid);
    return this.http.get('http://localhost:53029/Apilike/GetAnswersByQuestionGuid/', { params });
  }

  CreateAnswer(_questionGuid: string, _answer: AnswerViewModel) {
    let body = {
      questionGuid: _questionGuid, answer: {
        Instance: _answer.Instance,
        IsCorrect: _answer.IsCorrect,
        Guid: null
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
        Guid: _question.Guid
      }
    };
    return this.http.post('http://localhost:53029/Apilike/UpdateQuestion/', body);
  }

  getTestByTestingUrlGuid(_testingUrlGuid: string) {
    const params = new HttpParams().set('testingUrlGuid', _testingUrlGuid);
    return this.http.get('http://localhost:53029/Apilike/GetTestByTestingUrlGuid/', { params });
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
        IsValid: null
      }
    };
    return this.http.post('http://localhost:53029/Apilike/CreateTest/', body);
  }

  removeTest(_testGuid: string) {
    return this.http.post('http://localhost:53029/Apilike/RemoveTest/', {
      testGuid: _testGuid
    });
  }

  getAllTestingUrls() {
    return this.http.get('http://localhost:53029/Admin/GetAllTestingUrls/');
  }

  updateTest(_testGuid: string, _test: TestViewModel) {
    const body = {
      testGuid: _testGuid,
      test: {
        Name: _test.Name,
        Description: _test.Description,
        TestTimeLimit: _test.TestTimeLimit,
        QuestionTimeLimit: _test.QuestionTimeLimit,
        Questions: null,
        Guid: null,
        IsValid: null
      }
    };
    return this.http.post('http://localhost:53029/Apilike/UpdateTest/', body);
  }

  createTestingUrl(_testingUrl: TestingUrlViewModel) {
    const body = {
      testingUrl: {
        UrlInstance: _testingUrl.UrlInstance,
        Guid: null,
        TestGuid: _testingUrl.TestGuid,
        TestName: _testingUrl.TestName,
        Interviewee: null,
        NumberOfRuns: 0,
        AllowedStartDate: _testingUrl.AllowedStartDate,
        AllowedEndDate: _testingUrl.AllowedEndDate
      }
    };
    return this.http.post('http://localhost:53029/Apilike/CreateTestingUrl/', body);
  }

  removeTestingUrl(_testingUrlGuid: string) {
    return this.http.post('http://localhost:53029/Apilike/RemoveTestingUrl/', { testingUrlGuid: _testingUrlGuid });
  }

  getQuestionsByTestGuid(testGuid: string) {
    const params = new HttpParams().set('testGuid', testGuid);
    return this.http.get('http://localhost:53029/Apilike/GetQuestionsByTestGuid/', { params });
  }

  getInfoAndStartTest(testingUrlGuid: string) {
    const params = new HttpParams().append('testingUrlGuid', testingUrlGuid);
    return this.http.get('http://localhost:53029/Quiz/GetInfoAndStartTest', { params });
  }

  getAllTestResults() {
    return this.http.get("http://localhost:53029/Admin/GetAllTestingResults");
  }

  finishTest(result: TestPassingViewModel) {

    const body = {
      testPassing: {
        Guid: result.Guid,
        TestingGuid: result.TestingGuid,
        Interviewee: result.Interviewee,
        TestingStartDateTime: result.TestingStartDateTime,
        TestingEndDateTime: result.TestingEndDateTime,
        Duration: result.Duration,
        QuestionsTried: result.QuestionTried.toString(),
        Score: result.Score,
        AttemptGuid: result.AttemptGuid,
        Questions: result.Questions
      }

    };
    return this.http.post('http://localhost:53029/Quiz/FinishTest', body);
  }

  login(_username: string, _password: string) {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'content-type': 'application/x-www-form-urlencoded'
    //   })
    // };

    const body = {
      'username': _username,
      'password': _password,
    };

    // var settings = {
    //   "async": true,
    //   "crossDomain": true,
    //   "url": "http://localhost:53029/token",
    //   "method": "POST",
    //   "headers": {
    //     "Content-Type": "application/json;charset=UTF-8",
    //     "cache-control": "no-cache",
    //     "Postman-Token": "e6572e3d-8702-4949-8d47-dee8369a2647",
    //     "Pragma": "no-cache",
    //     "Access-Control-Allow-Origin": '*',
    //     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    //     "Access-Control-Allow-Methods": "*"
    //   },
    //   "data": {
    //     "username": "admin",
    //     "password": "admin",
    //     "grant_type": "password"
    //   }
    // }

    
 return this.http.post("http://localhost:53029/Account/Login",body,{withCredentials:true});
  }

}
