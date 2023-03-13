import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/interface/candidate';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-list-candidate',
  templateUrl: './list-candidate.component.html',
  styleUrls: ['./list-candidate.component.scss']
})
export class ListCandidateComponent {

  constructor(private candidateService:CandidateService){}
  ngOnInit(): void {
    this.candidateService.getAllCandidates().subscribe((data)=>{
      this.candidateCollection =data;
    });
  }
  candidateCollection: Candidate[]=[]
  deleteCandidate(id:number)
  {
   if( confirm("Are you sure you want to delete "))
    {
      this.candidateService.deleteCandidateById(id).subscribe((data)=>{
        window.location.reload();
      });
    }
  }
}
