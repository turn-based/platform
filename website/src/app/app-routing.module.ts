import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablePageComponent } from './table/table-page.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { PingComponent } from './ping/ping.component';
import { CallbackComponent } from './callback/callback.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'ping', component: PingComponent},
  {path: 'callback', component: CallbackComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'table', component: TablePageComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
