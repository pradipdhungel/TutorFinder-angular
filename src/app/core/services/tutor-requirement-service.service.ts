import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiEndpoints } from '../app-url.constant';
import { RequirementDTO } from '../core.model';

@Injectable({
  providedIn: 'root'
})
export class TutorRequirementServiceService {

  constructor(private http: HttpClient) { }
  createTutorRequirement(data:any): Observable<RequirementDTO[]> {
    // return this.http.post<RequirementDTO[]>(ApiEndpoints.AUTH.TUTOR_REQUIREMENT, data);
    const tutorRequirementObservable: Observable<RequirementDTO[]> 
    = this.http.post<RequirementDTO[]>(ApiEndpoints.AUTH.TUTOR_REQUIREMENT, data).pipe(
      map(
        (reqirement: RequirementDTO[]) => {
          return reqirement;
        })
    );    
    return tutorRequirementObservable;
  }
}
