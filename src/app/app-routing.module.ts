import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupPageComponent } from './auth/signup-page/signup-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { TutorRequirementsComponent } from './features/public-pages/jobs/jobs.component';

const routes: Routes = [

  {
    path: 'register',
    component: SignupPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },

  {
    path: '',
    loadChildren: () => import('@app/features/features.module')
      .then(m => m.FeaturesModule),
  },

  {
    path:  'tutor-requirement',
    component: TutorRequirementsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
