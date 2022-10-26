import { Component, OnInit } from '@angular/core';
import { CredentialsService } from '@app/auth/services/credentials.service';
import { USER_ROLES } from '@app/core/core.constant';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    public credentialService: CredentialsService) { }

    isStudent:boolean = false

  ngOnInit(): void {
    var userRole: string = this.credentialService.getUserRole();
    this.isStudent = userRole == USER_ROLES.ROLE_STUDENT;
  }
}
