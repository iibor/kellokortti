import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EditHoursComponent } from './components/edit-hours/edit-hours.component';

const routes: Routes = [{path: '', component: DashboardComponent},
{path: 'user-details/:id', component: UserDetailsComponent},
{path: 'register', component: RegisterComponent},
{path: 'login', component: LoginComponent},
{path: 'edit-hours/:id', component: EditHoursComponent},
{path: '**', component: NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
