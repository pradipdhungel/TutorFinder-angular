import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tutorDTO } from '../model/tutor.model';

const baseUrl = 'http://localhost:9092/api/tutor-service';

@Injectable({
  providedIn: 'root'
})
export class TutorServiceService {

  constructor(private http:HttpClient) { }
  getAll(): Observable<tutorDTO[]> {
    return this.http.get<tutorDTO[]>(baseUrl);
  }
  // get(id: any): Observable<tutorDTO> {
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

  findById(id: any): Observable<tutorDTO[]> {
    return this.http.get<tutorDTO[]>(`${baseUrl}?id=${id}`);
  }
}
