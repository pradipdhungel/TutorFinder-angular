import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialsService } from '@app/auth/services/credentials.service';
import { APP_ROUTES, USER_ROLES } from '@app/core/core.constant';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.scss']
})
export class JobSearchComponent implements OnInit {

  searchText!: string;

  constructor(public router: Router, private toastrService: ToastrService, public credentialService: CredentialsService) { }
  isStudent: boolean = false;

  ngOnInit(): void {
    var userRole: string = this.credentialService.getUserRole();
    this.isStudent = userRole == USER_ROLES.ROLE_STUDENT;
  }

  onSearchSubmit() {
    const requirementBrowseQueryParams = {
      q: this.searchText
    };
    console.log("jobsBrowseQueryParams", requirementBrowseQueryParams)
    this.router.navigate([APP_ROUTES.TUTOR_REQUIREMENT_SEARCH], { queryParams: requirementBrowseQueryParams, queryParamsHandling: 'merge' });
  //  if(this.requirementBrowseQueryParams===null){
  //   this.toastrService.success('You did not insert any search text!')
  //  }
  }

}
