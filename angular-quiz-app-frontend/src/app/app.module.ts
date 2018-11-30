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
import { RouterModule, RouterLinkActive } from '@angular/router';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { PassingTestComponent } from './passing-test/passing-test.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { ManageTestsComponent } from './manage-tests/manage-tests.component';
import { UpdateTestComponent } from './update-test/update-test.component';
import { ManageTestingUrlComponent } from './manage-testing-url/manage-testing-url.component';

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
    ManageTestingUrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    RouterModule.forRoot(
      [{
        path: 'AdminPanel', component: AdminPanelComponent, children: [
          { path: 'ManageTests', component: ManageTestsComponent },
          { path: 'ManageTestingUrls', component: ManageTestingUrlComponent },
          { path: 'EditTest/:guid', component: UpdateTestComponent },
          { path: 'EditAnswers/:testGuid/:questionGuid', component: CreateAnswerComponent }]
      },
      {
        path: 'UserPanel', component: UserPanelComponent, children: [
          { path: 'TestPassing/:testGuid/:username', component: PassingTestComponent },
    
        
        ]
      },
      { path: 'TestPassing/:testGuid', component: PassingTestComponent },
      { path: 'UserPanel/:username', component: UserPanelComponent }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
