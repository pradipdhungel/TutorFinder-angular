import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/auth/services/authentication.service';
import { appBrandName, USER_ROLES } from '@app/core/core.constant';
import { CredentialsService } from '@app/auth/services/credentials.service';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.scss']
})
export class HomeNavbarComponent implements OnInit {

  readonly appBrandName = appBrandName;

  isNavCollapse: boolean = true;
  isLoggedIn: boolean = false;
  firstName: string | undefined; // TODO replace with firstname, fullname or substring email..
  isStudent: boolean = false

  constructor(private credentialsService: CredentialsService, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.initializeLoggedInDetails();
  }

  private initializeLoggedInDetails() {

    console.log("this.credentialsService.getCredentials() ==>> ", this.credentialsService.getCredentials()?.jwtTokenPayload?.roles);
    var userRole: string = this.credentialsService.getUserRole();
    this.isStudent = userRole == USER_ROLES.ROLE_STUDENT;
    console.log("this.isStudent => " , this.isStudent);
    
    this.isLoggedIn = this.credentialsService.isAuthenticated();
    if (this.isLoggedIn) {
      const credentials = this.credentialsService.getCredentials();
      this.firstName = credentials?.username;
    }
  }

  toggleNavbarClass(): void {
    this.isNavCollapse = !this.isNavCollapse;
  }

  logout() {
    this.authenticationService.logout();
  }

}
