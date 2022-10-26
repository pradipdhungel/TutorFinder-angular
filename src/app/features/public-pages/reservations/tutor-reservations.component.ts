import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ApiEndpoints } from "@app/core/app-url.constant";
import { RequirementDTO, ReservationDTO } from "@app/core/core.model";
import { map, Observable, Subject } from "rxjs";

@Component({
    selector: 'tutor-reservations',
    templateUrl: './tutor-reservations.component.html',
    styleUrls: ['./tutor-reservations.component.scss']
})

export class TutorReservationsComponent implements OnInit {
    private unsubscribe = new Subject<void>();

    reservations: ReservationDTO[] = [];

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.getAllReservations().subscribe(res => {
            console.log("getAllReservationRequest => ", res);

            this.reservations = res
        });
        console.log("this.reservationRequests ==> ", this.reservations);
    }

    // public onApproveClick(data: ReservationDTO) {
    //     console.log("onApproveClick => ", this.approveReservationRequest(data));
    //     // this.approveReservationRequest(data);
    // }

    private getAllReservations(): Observable<ReservationDTO[]> {
        const jobObservable: Observable<ReservationDTO[]> = this.http.get<ReservationDTO[]>(ApiEndpoints.RESERVATION.GET_ALL_RESERVATIN_TUTOR).pipe(
            map(
                (reqirement: ReservationDTO[]) => {
                    return reqirement;
                })
        );

        return jobObservable;
    }

    // private approveReservationRequest(data: ReservationDTO) {
    //     this.http.put(ApiEndpoints.RESERVATION.APPROVE_RESERVATION, data).subscribe(data => {
    //         console.log(data);
    //         this.getAllReservationRequest().subscribe(res => {
    //             console.log("getAllReservationRequest => ", res);
    //             this.reservationRequests = res
    //         });
    //     });
    // }
}