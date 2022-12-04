import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FillSurveyComponent } from './fill-survey/fill-survey.component';
import { MysurveysComponent } from './mysurveys/mysurveys.component';
import { NewComponent } from './new/new.component';
import { ResultsComponent } from './results/results.component';
import { ErrorComponent } from './error/error.component';
import { EmailComponent } from './email/email.component';

const routes: Routes = [
  {path: '', redirectTo: 'surveys', pathMatch: "full"},
  {path: 'surveys', component: DashboardComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'mysurveys', component: MysurveysComponent},
  {path: 'new', component: NewComponent},
  {path: '', children: [
    {path: 'fill/:id', component: FillSurveyComponent },
    {path: 'results/:id', component: ResultsComponent},
    {path: 'email/:id', component: EmailComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent]
