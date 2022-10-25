import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicPagesWrapperComponent } from './public-pages-wrapper.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomeNavbarComponent } from './components/home-navbar/home-navbar.component';
import { PublicPagesRoutingModule } from './public-pages-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { JobSearchComponent } from './components/job-search/job-search.component';
import { FooterComponent } from './components/footer/footer.component';
import { TutorRequirementsComponent } from './jobs/jobs.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TutorRequirementComponent } from './Tutor-Requirement-Page/tutor-requirement/tutor-requirement.component';


@NgModule({
  declarations: [
    HomePageComponent,
    ContactPageComponent,
    PublicPagesWrapperComponent,
    HomeNavbarComponent,
    JobSearchComponent,
    FooterComponent,
    TutorRequirementsComponent,
    TutorRequirementComponent,
    
  ],
  imports: [
    CommonModule,
    PublicPagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot()
  ]
})
export class PublicPagesModule { }
