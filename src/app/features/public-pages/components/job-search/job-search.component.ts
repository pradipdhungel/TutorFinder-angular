import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from '@app/core/core.constant';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.scss']
})
export class JobSearchComponent implements OnInit {

  searchText!: string;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onSearchSubmit() {
    const requirementBrowseQueryParams = {
      q: this.searchText
    };
    console.log("jobsBrowseQueryParams", requirementBrowseQueryParams)
    this.router.navigate([APP_ROUTES.TUTOR_REQUIREMENT], { queryParams: requirementBrowseQueryParams, queryParamsHandling: 'merge' });
  }

}
