import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { IndexComponent } from 'src/app/views/dashboard/index/index.component';

const DashboardRouter: Routes = [
  { path: "", component: IndexComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(DashboardRouter)],
})
export class DashboardRouterModule { }
