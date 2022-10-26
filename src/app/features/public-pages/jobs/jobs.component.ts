import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, convertToParamMap, ParamMap, Params } from '@angular/router';
import { CredentialsService } from '@app/auth/services/credentials.service';
import { ApiEndpoints } from '@app/core/app-url.constant';
import { QueryParamKey, USER_ROLES } from '@app/core/core.constant';
import { JobDTO, RequirementDTO, ReservationDTO } from '@app/core/core.model';
import { reservationDTO } from '@app/core/model/reservation.model';
import { SearchServiceService } from '@app/core/services/search-service.service';
import * as moment from 'moment';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class TutorRequirementSearchComponent implements OnInit {

  private unsubscribe = new Subject<void>();

  routeQueryParams: Params = {};
  paramMap!: ParamMap;

  requirements: RequirementDTO[] = [];

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private searchService: SearchServiceService,
    public credentialService: CredentialsService) { }

  isStudent: boolean = false;

  ngOnInit(): void {
    this.processRouteQueryParams();
    var userRole: string = this.credentialService.getUserRole();
    this.isStudent = userRole == USER_ROLES.ROLE_STUDENT;
  }

  private processRouteQueryParams(): void {
    this.route.queryParams
      .pipe(
        filter((val: Params) => val && Object.keys(val).length > 0),
        takeUntil(this.unsubscribe)
      )
      .subscribe((params: Params) => {
        this.routeQueryParams = params;
        const paramMap: ParamMap = convertToParamMap(params);
        this.paramMap = paramMap;
        const query = paramMap.get(QueryParamKey.SEARCH_QUERY) || '';
        if (query && query.length > 0) {
          this.searchRequest(query);
        }
      });
  }

  public searchRequest(query: string): void {
    this.searchService.getAllTutorRequirement(query).subscribe(response => {
      this.requirements = response;
    });
  }

  onSendRequestClick(requirement: RequirementDTO): void {

    console.log("requirement => ", requirement);

    const reservationData: reservationDTO = {
      studentUserId: requirement.studentUserId,
      tutorRequirementId: requirement.id,
      tutorRequirementTitle: requirement.title,
      tutorRequirementDesc: requirement.description
    }

    this.http.post(ApiEndpoints.RESERVATION.APPROVE_RESERVATION, reservationData).subscribe(data => {
      console.log(data);
    });
  }
}
