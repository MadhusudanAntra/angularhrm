import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitingRoutingModule } from './recruiting-routing.module';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { ListCandidateComponent } from './list-candidate/list-candidate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CandidateService } from '../services/candidate.service';


@NgModule({
  declarations: [
    AddCandidateComponent,
    ListCandidateComponent
  ],
  imports: [
    CommonModule,
    RecruitingRoutingModule,
    ReactiveFormsModule
  ],
  providers:[CandidateService]
})
export class RecruitingModule { }
