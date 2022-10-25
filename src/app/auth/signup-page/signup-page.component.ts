import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { appBrandName } from '@app/core/core.constant';
import { CoreUtil } from '@app/core/core.util';
import { RegisterContext } from '../auth.model';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  readonly appBrandName = appBrandName;

  loading: boolean = false;
  hasError: boolean = false;
  responseMessage: string = '';

//newly added
  isNameSelected!:boolean;
  selectInput(event:any) {
    let selected = event.target.value;
    if (selected == "ROLE_STUDENT") {
      this.isNameSelected = true;
    } else {
      this.isNameSelected = false;
    }
  }
  // Form state
  registrationForm!: FormGroup;
  isTermsChecked: boolean = false;
  isSubmitted = false;
  role = "ROLE_STUDENT";

  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.initializeRegistrationForm();
    
  }
  
  initializeRegistrationForm(): void {
    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      passwordConfirm: ['', [Validators.required]],
      // role: ['ROLE_STUDENT',],//ROLE_STUDENT
      fullName: [''],
      address: [''],     
      phone: [''],      
      description: [''],
      shortInfo: [''],
      expertise: ['']

    }, {
      validator: CoreUtil.ConfirmedValidator('password', 'passwordConfirm')
    });
  }

  onChange(role: any) {
    this.role = role.value;
  }

  get formControls(): { [p: string]: AbstractControl } {
    return this.registrationForm.controls;
  }
   
  onRegisterSubmit(): void {
    
    this.isSubmitted = true;
    
    if (this.registrationForm.invalid) {
      return;
    }    
    const formValue = this.registrationForm.value;
    const registerContext: RegisterContext = {
      username:formValue.username,
      password: formValue.password,        
      role: this.role,  
      fullname: formValue.fullName,
      address:formValue.address, 
      phone:formValue.phone,
      description:formValue.description,
      shortInfo: formValue.shortInfo,
      expertise: formValue.expertise,
    };
    this.loading = true;
    this.responseMessage = '';
    this.authenticationService.registerUser(registerContext, false)
      .pipe()
      .subscribe(
        res => {
          this.loading = false;
          this.hasError = false;
          this.responseMessage = 'Registration Successful, Please check your email for verification.';
          this.isSubmitted = false;
          this.registrationForm.reset();
          console.log('registration response ', res);
        },
        err => {
          this.loading = false;
          this.hasError = true;
          this.responseMessage = err?.error?.response || 'Sorry! Something went wrong !!!';
        }
      );
  }
}
