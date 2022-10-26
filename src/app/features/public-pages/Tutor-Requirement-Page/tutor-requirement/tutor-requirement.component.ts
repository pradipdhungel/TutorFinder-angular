import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TutorRequirementContext } from '@app/auth/auth.model';
import { AuthenticationService } from '@app/auth/services/authentication.service';
import { appBrandName } from '@app/core/core.constant';
import { RequirementDTO } from '@app/core/core.model';

import { TutorRequirementServiceService } from '@app/core/services/tutor-requirement-service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-tutor-requirement',
  templateUrl: './tutor-requirement.component.html',
  styleUrls: ['./tutor-requirement.component.scss']
})
export class TutorRequirementComponent implements OnInit {

  readonly appBrandName = appBrandName;

  loading: boolean = false;
  hasError: boolean = false;
  responseMessage: string = '';
  requirements: RequirementDTO[] = [];

//newly added
  // isNameSelected!:boolean;
  // selectInput(event:any) {
  //   let selected = event.target.value;
  //   if (selected == "ROLE_STUDENT") {
  //     this.isNameSelected = true;
  //   } else {
  //     this.isNameSelected = false;
  //   }
  // }
  // Form state
  tutorRequirementForm!: FormGroup;
  isTermsChecked: boolean = false;
  isSubmitted = false;
  role = "ROLE_STUDENT";

  constructor(private toastrService: ToastrService, private formBuilder: FormBuilder,private router: Router,private tutorRequirementService:TutorRequirementServiceService,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.initializeTutorRequirementForm();
    
  }
  
  initializeTutorRequirementForm(): void {
    this.tutorRequirementForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: [null, [Validators.required]]
    });
  }
  onChange(role: any) {
    this.role = role.value;
  }
  get formControls(): { [p: string]: AbstractControl } {
    return this.tutorRequirementForm.controls;
  } 
  onSubmit(): void {
    // this.role = role.value;
    this.isSubmitted = true;
    if (this.tutorRequirementForm.invalid) {
      return;
    }    
    const formValue = this.tutorRequirementForm.value;
    const tutorRequirementContext: TutorRequirementContext = {
      title:formValue.title,     
      description:formValue.description
    };  
    console.log(this.tutorRequirementService.createTutorRequirement(tutorRequirementContext)); 
    
    this.tutorRequirementService.createTutorRequirement(tutorRequirementContext).subscribe(response => {
      this.requirements = response; 
    });
    console.log(tutorRequirementContext);
    this.loading = true;   
    // this.responseMessage='you have Successfuly created a tutor requirement, Please check your email for further verification!';
    this.router.navigate(['/']).then(() => {
      this.responseMessage='you have Successfuly created a tutor requirement, Please check your email for further verification!';
      this.toastrService.success(this.responseMessage);
    });
  }
}

