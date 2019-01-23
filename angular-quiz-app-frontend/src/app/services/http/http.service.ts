import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpHandler, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { AnswerViewModel } from 'src/assets/Models/Managing/AnswerViewModel';
import { QuestionViewModel } from 'src/assets/Models/Managing/QuestionViewModel';
import { TestViewModel } from 'src/assets/Models/Managing/TestViewModel';
import { TestingUrlViewModel } from 'src/assets/Models/Managing/TestingUrlViewModel';
import { TestPassingViewModel } from 'src/assets/Models/QuizPassing/TestPassingViewModel';
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }
  //Login Page methods
  Login(Login: string, Password: string) {
    const body = { Username: Login, Password: Password };
    return this.http.post('http://localhost:53029/Account/Login/', body).catch((err: HttpErrorResponse) => {
      this.errorCheck(err);
      return new Observable<any>();
    });
  }
  //Admin page methods
  GetAllTests() {
    return this.http.get('http://localhost:53029/Admin/GetAllTests/').catch((err: HttpErrorResponse) => {
      this.errorCheck(err);
      return new Observable<any>();
    });
  }

  GetAnswersByQuestionGuid(questionGuid: string) {
    const params = new HttpParams().set('questionGuid', questionGuid);
    return this.http.get('http://localhost:53029/Apilike/GetAnswersByQuestionGuid/', { params }).catch((err: HttpErrorResponse) => {
      this.errorCheck(err);
      return new Observable<any>();
    });
  }

  CreateAnswer(_questionGuid: string, _answer: AnswerViewModel) {
    let body = {
      questionGuid: _questionGuid, answer: {
        Instance: _answer.Instance,
        IsCorrect: _answer.IsCorrect,
        Guid: null
      }
    };
    return this.http.post('http://localhost:53029/Apilike/CreateAnswer/', body).catch((err: HttpErrorResponse) => {
      this.errorCheck(err);
      return new Observable<any>();
    });
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
    return this.http.post('http://localhost:53029/Apilike/CreateQuestion/', body).catch((err: HttpErrorResponse) => {
      this.errorCheck(err);
      return new Observable<any>();
    });
  }

  removeQuestion(_testGuid: string, _questionGuid: string) {
    return this.http.post('http://localhost:53029/Apilike/RemoveQuestion/', { testGuid: _testGuid, questionGuid: _questionGuid }).catch((err: HttpErrorResponse) => {
      this.errorCheck(err);
      return new Observable<any>();
    });
  }

  removeAnswer(_answerGuid: string) {
    return this.http.post('http://localhost:53029/Apilike/RemoveAnswer', { answerGuid: _answerGuid }).catch((err: HttpErrorResponse) => {
      this.errorCheck(err);
      return new Observable<any>();
    });
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
    return this.http.post('http://localhost:53029/Apilike/UpdateQuestion/', body).catch((err: HttpErrorResponse) => {
      this.errorCheck(err);
      return new Observable<any>();
    });
  }

  getTestByTestingUrlGuid(_testingUrlGuid: string) {
    const params = new HttpParams().set('testingUrlGuid', _testingUrlGuid);
    return this.http.get('http://localhost:53029/Apilike/GetTestByTestingUrlGuid/', { params }).catch((err: HttpErrorResponse) => {
      this.errorCheck(err);
      return new Observable<any>();
    });
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
    return this.http.post('http://localhost:53029/Apilike/CreateTest/', body).catch((err: HttpErrorResponse) => {
      this.errorCheck(err);
      return new Observable<any>();
    });
  }

  removeTest(_testGuid: string) {
    return this.http.post('http://localhost:53029/Apilike/RemoveTest/', {
      testGuid: _testGuid
    }).catch((err: HttpErrorResponse) => {
      this.errorCheck(err);
      return new Observable<any>();
    });
  }

  getAllTestingUrls() {
    return this.http.get('http://localhost:53029/Admin/GetAllTestingUrls/').catch((err: HttpErrorResponse) => {
      this.errorCheck(err);
      return new Observable<any>();
    });
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
    return this.http.post('http://localhost:53029/Apilike/UpdateTest/', body).catch((err: HttpErrorResponse) => {
      this.errorCheck(err);
      return new Observable<any>();
    });
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
    return this.http.post('http://localhost:53029/Apilike/CreateTestingUrl/', body).catch((err: HttpErrorResponse) => {
      this.errorCheck(err);
      return new Observable<any>();
    });
  }

  removeTestingUrl(_testingUrlGuid: string) {
    return this.http.post('http://localhost:53029/Apilike/RemoveTestingUrl/', { testingUrlGuid: _testingUrlGuid }).catch((err: HttpErrorResponse) => {
      this.errorCheck(err);
      return new Observable<any>();
    });
  }

  getQuestionsByTestGuid(testGuid: string) {
    const params = new HttpParams().set('testGuid', testGuid);
    return this.http.get('http://localhost:53029/Apilike/GetQuestionsByTestGuid/', { params }).catch((err: HttpErrorResponse) => {
      this.errorCheck(err);
      return new Observable<any>();
    });
  }

  getInfoAndStartTest(testingUrlGuid: string) {
    const params = new HttpParams().append('testingUrlGuid', testingUrlGuid);
    return this.http.get('http://localhost:53029/Quiz/GetInfoAndStartTest', { params }).catch((err: HttpErrorResponse) => {
      this.errorCheck(err);
      return new Observable<any>();
    });
  }

  getAllTestResults() {
    return this.http.get("http://localhost:53029/Admin/GetAllTestingResults").catch((err: HttpErrorResponse) => {
      this.errorCheck(err);
      return new Observable<any>();
    });
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
    return this.http.post('http://localhost:53029/Quiz/FinishTest', body).catch((err: HttpErrorResponse) => {
      this.errorCheck(err);
      return new Observable<any>();
    });
  }

  login(_username: string, _password: string) {
    const body = {
      'username': _username,
      'password': _password,
    };
 return this.http.post("http://localhost:53029/Account/Login",body,{withCredentials:true}).catch((err: HttpErrorResponse) => {
  this.errorCheck(err);
  return new Observable<any>();
});
  }

  private errorCheck(err: HttpErrorResponse) {
  
    var snackbar = document.getElementById("snackbar");
    if (err.status == 404) {
      snackbar.innerHTML = "Sorry, we cannot found what you are looking for";
    } else if (err.status == 500) {
      snackbar.innerHTML = "Sorry, smth goes wrong. Try again or ask your administrator";
    } else {
      snackbar.innerHTML = err.message;
    }

      snackbar.className = "show";
      setTimeout(() => {
        snackbar.className= snackbar.className.replace("show", " ");
      }, 3000);
}

}
