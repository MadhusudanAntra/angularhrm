import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Candidate } from 'src/app/interface/candidate';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss'],
  providers:[]
})
export class AddCandidateComponent {

candidate:Candidate ={
  id: 0,
  firstName: '',
  lastName: '',
  emailId: '',
  mobile:''
}
  constructor(private fb:FormBuilder, private candidateService:CandidateService){}


addCandidateFormGroup = this.fb.group({

  firstName: new FormControl('',[Validators.required]),
  lastName: new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required, Validators.email]),
  mobile: new FormControl('')

});

get firstName()
{
  return this.addCandidateFormGroup.get('firstName')
}

get lastName(){
  return this.addCandidateFormGroup.get('lastName');
}
get email(){

  return this.addCandidateFormGroup.get('email')
}

stu:string[]=[]

saveCandidate(){

  
 this.candidate.emailId = this.addCandidateFormGroup.value.email
 this.candidate.firstName = this.addCandidateFormGroup.value.firstName
 this.candidate.lastName = this.addCandidateFormGroup.value.lastName
 this.candidate.mobile= this.addCandidateFormGroup.value.mobile
 
 this.candidateService.saveCandidate(this.candidate).subscribe( (data)=>{

  alert("candidate has been saved")
  this.addCandidateFormGroup.reset();

  
 } );
}

}

 

