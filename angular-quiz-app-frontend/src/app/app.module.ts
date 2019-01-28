import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CreateAnswerComponent } from './create-answer/create-answer.component';
import { RemoveAnswerComponent } from './remove-answer/remove-answer.component';
import { GetQuestionsByTestComponent } from './get-questions-by-test/get-questions-by-test.component';
import { CreateQuestionComponent } from './create-question/create-question.component'
import { RouterModule } from '@angular/router';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { PassingTestComponent } from './passing-test/passing-test.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { ManageTestsComponent } from './manage-tests/manage-tests.component';
import { UpdateTestComponent } from './update-test/update-test.component';
import { ManageTestingUrlComponent } from './manage-testing-url/manage-testing-url.component';
import { TestingResultsComponent } from './testing-results/testing-results.component';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminPanelComponent,
    CreateAnswerComponent,
    RemoveAnswerComponent,
    GetQuestionsByTestComponent,
    CreateQuestionComponent,
    UserPanelComponent,
    PassingTestComponent,
    UpdateQuestionComponent,
    ManageTestsComponent,
    UpdateTestComponent,
    ManageTestingUrlComponent,
    TestingResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    RouterModule.forRoot(
      [
       { path: 'admin-panel',canActivate:[AuthGuardService], component: AdminPanelComponent, children: [
         { path: '', redirectTo: 'manage-tests', pathMatch: 'full' },
         { path: 'testing-results',canActivate:[AuthGuardService], component: TestingResultsComponent },
          { path: 'manage-tests',canActivate:[AuthGuardService], component: ManageTestsComponent },
          { path: 'manage-testing-urls',canActivate:[AuthGuardService], component: ManageTestingUrlComponent },
          { path: 'edit-test/:guid',canActivate:[AuthGuardService], component: UpdateTestComponent },
          { path: 'edit-answers/:testGuid/:questionGuid',canActivate:[AuthGuardService], component: CreateAnswerComponent }]
      },

      // { path: 'user-panel', component: UserPanelComponent },
      // { path: 'test-passing', component: PassingTestComponent },
      { path: 'test-passing/:testingUrlGuid', component: PassingTestComponent },
        //  { path: 'UserPanel/:username', component: UserPanelComponent }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
