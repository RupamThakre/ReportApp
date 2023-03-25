import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportComponent } from './report/report.component';
import { NotificationComponent } from './notification/notification.component';
import { LeadComponent } from './lead/lead.component';
import { MemberComponent } from './member/member.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: 'app', component: AppComponent},
  { path: 'welcome', component: WelcomepageComponent },
  { path: 'login', component : LoginComponent },
  { path: 'register', component : RegisterComponent },
  { path: 'dashboard', component : DashboardComponent },
  { path: 'home', component : HomeComponent },
  { path: 'profile', component : ProfileComponent },
  { path: 'report', component : ReportComponent },
  { path: 'notification', component : NotificationComponent },
  { path: 'lead', component : LeadComponent },
  { path: 'member', component : MemberComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
