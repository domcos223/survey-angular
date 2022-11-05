import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MysurveysComponent } from './mysurveys/mysurveys.component';
import { NewComponent } from './new/new.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: "prefix"},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'mysurveys', component: MysurveysComponent},
  {path: 'new', component: NewComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent]
