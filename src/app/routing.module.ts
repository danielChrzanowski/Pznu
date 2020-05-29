import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DodajPostComponent } from './pages/dodaj-post/dodaj-post.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { HomeComponent } from './pages/home/home.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { ZadaniaComponent } from './pages/zadania/zadania.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { ClientAuthGuard } from './_authentication/client-auth-guard/client-auth.guard';
import { EmployeeAuthGuard } from './_authentication/employee-auth-guard/employee-auth-guard';
import { UserAuthGuard } from './_authentication/user-auth-guard/user-auth-guard';
import { StackblitzComponent } from './pages/stackblitz/stackblitz.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'dodajPost', canActivate: [EmployeeAuthGuard], component: DodajPostComponent },
  { path: 'createUser', component: CreateUserComponent },
  { path: 'zadania', component: ZadaniaComponent },
  { path: 'stackblitz', canActivate: [ClientAuthGuard], component: StackblitzComponent },
  { path: 'userInfo', canActivate: [UserAuthGuard], component: UserInfoComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule { }

export const routingComponents = [HomeComponent, LogInComponent, CreateUserComponent,
  ZadaniaComponent, StackblitzComponent, DodajPostComponent, UserInfoComponent]

//--module app