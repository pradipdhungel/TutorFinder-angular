import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { studentDTO } from '../model/student.model';

const baseUrl = 'http://localhost:9092/api/student-service';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  
  constructor(private http: HttpClient) {}
  getAll(): Observable<studentDTO[]> {
    return this.http.get<studentDTO[]>(baseUrl);
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

  findById(id: any): Observable<studentDTO[]> {
    return this.http.get<studentDTO[]>(`${baseUrl}?id=${id}`);
  }
}
