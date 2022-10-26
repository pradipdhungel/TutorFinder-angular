import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ApiEndpoints } from "@app/core/app-url.constant";
import { RequirementDTO, ReservationDTO } from "@app/core/core.model";
import { map, Observable, Subject } from "rxjs";

@Component({
    selector: 'reservation-request',
    templateUrl: './reservation-request.component.html',
    styleUrls: ['./reservation-request.component.scss']
})

export class ReservationRequestComponent implements OnInit {
    private unsubscribe = new Subject<void>();

    reservationRequests: ReservationDTO[] = [];

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.getAllReservationRequest().subscribe(res => {
            console.log("getAllReservationRequest => ", res);

            this.reservationRequests = res
        });
        console.log("this.reservationRequests ==> ", this.reservationRequests);
    }

    public onApproveClick(data: ReservationDTO) {
        console.log("onApproveClick => ", this.approveReservationRequest(data));
        // this.approveReservationRequest(data);
    }

    private getAllReservationRequest(): Observable<ReservationDTO[]> {
        const jobObservable: Observable<ReservationDTO[]> = this.http.get<ReservationDTO[]>(ApiEndpoints.RESERVATION.ALL_REQUEST).pipe(
            map(
                (reqirement: ReservationDTO[]) => {
                    return reqirement;
                })
        );

        return jobObservable;
    }

    private approveReservationRequest(data: ReservationDTO) {
        this.http.put(ApiEndpoints.RESERVATION.APPROVE_RESERVATION, data).subscribe(data => {
            console.log(data);
            this.getAllReservationRequest().subscribe(res => {
                console.log("getAllReservationRequest => ", res);
                this.reservationRequests = res
            });
        });
    }
}