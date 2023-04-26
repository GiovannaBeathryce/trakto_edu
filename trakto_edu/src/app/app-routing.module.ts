import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MaterialDidaticoComponent } from './components/material-didatico/material-didatico.component';
import { AuthGuard } from './auth.guard';
import { RedirectGuard } from './redirect.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate : [RedirectGuard]
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'material_didatico',
    component: MaterialDidaticoComponent,
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
