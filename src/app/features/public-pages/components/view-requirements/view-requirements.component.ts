import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ApiEndpoints } from "@app/core/app-url.constant";
import { RequirementDTO, ReservationDTO } from "@app/core/core.model";
import { map, Observable, Subject } from "rxjs";

@Component({
    selector: 'view-requirements',
    templateUrl: './view-requirements.component.html',
    styleUrls: ['./view-requirements.component.scss']
})

export class ViewRequirementsComponent implements OnInit {
    private unsubscribe = new Subject<void>();

    requirements: RequirementDTO[] = [];

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.getAllRequirements().subscribe(res => {
            console.log("getAllReservationRequest => ", res);

            this.requirements = res
        });
        console.log("this.reservationRequests ==> ", this.requirements);
    }

    private getAllRequirements(): Observable<RequirementDTO[]> {
        const jobObservable: Observable<RequirementDTO[]> = this.http.get<RequirementDTO[]>(ApiEndpoints.REQUIREMENT.VIEW_REQUIREMENT).pipe(
            map(
                (reqirement: RequirementDTO[]) => {
                    return reqirement;
                })
        );
        return jobObservable;
    }
}