import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@app/shared/shared.module';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthenticationService } from './services/authentication.service';
import { HttpInterceptorService } from '@app/core/services/http-interceptor.service';
import { CredentialsService } from './services/credentials.service';

@NgModule({
  declarations: [
    LoginPageComponent,
    SignupPageComponent,
  ],
  //newly Added
  // providers:[
  //   AuthenticationGuard,
  //   AuthenticationService,
  //   {
  //     provide: HttpInterceptorService,
  //     useClass: CredentialsService,
  //     multi: true
  //   }
  // ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
