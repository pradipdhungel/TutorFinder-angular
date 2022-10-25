import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { reservationDTO } from '../model/reservation.model';

const baseUrl = 'http://localhost:9092/api/reservation-service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) {}
  getAll(): Observable<reservationDTO[]> {
    return this.http.get<reservationDTO[]>(baseUrl);
  }
  // get(id: any): Observable<studentDTO> {
  //   return this.http.get(`${baseUrl}/${id}`);
  // }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findById(id: any): Observable<reservationDTO[]> {
    return this.http.get<reservationDTO[]>(`${baseUrl}?id=${id}`);
  }
}
