import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NgbModule, NgbPagination, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MysurveysComponent } from './mysurveys/mysurveys.component';
import { ResultsComponent } from './results/results.component';
import { NewComponent } from './new/new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FillSurveyComponent } from './fill-survey/fill-survey.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { EmailComponent } from './email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    MysurveysComponent,
    ResultsComponent,
    NewComponent,
    FillSurveyComponent,
    ErrorComponent,
    EmailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
