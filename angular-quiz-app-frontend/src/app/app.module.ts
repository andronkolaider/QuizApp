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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminPanelComponent,
    CreateAnswerComponent,
    RemoveAnswerComponent,
    GetQuestionsByTestComponent,
    CreateQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
