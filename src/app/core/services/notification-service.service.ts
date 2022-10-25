import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { notificationDTO } from '../model/notification.model';

const baseUrl = 'http://localhost:9092/api/notification-service';
@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  constructor(private http: HttpClient) {}
  getAll(): Observable<notificationDTO[]> {
    return this.http.get<notificationDTO[]>(baseUrl);
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

  findById(id: any): Observable<notificationDTO[]> {
    return this.http.get<notificationDTO[]>(`${baseUrl}?id=${id}`);
  }

}
