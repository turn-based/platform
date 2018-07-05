import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablePageComponent } from './table/table-page.component';

const routes: Routes = [{
  path: 'dashboard',
  component: DashboardComponent,
}, {
  path: 'table',
  component: TablePageComponent,
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'dashboard',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
