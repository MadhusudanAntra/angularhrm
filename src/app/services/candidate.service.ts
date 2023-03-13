import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Candidate } from '../interface/candidate';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http:HttpClient) { }

  saveCandidate(candidate:Candidate)
  {
    return this.http.post("http://localhost:5114/api/Candidate",candidate);
  }

  getAllCandidates():Observable<Candidate[]>{

    return this.http.get<Candidate[]>("http://localhost:5114/api/Candidate")
   }

   deleteCandidateById(id:any){
    return this.http.delete("http://localhost:5114/api/candidate/"+id)
   }
  
}
