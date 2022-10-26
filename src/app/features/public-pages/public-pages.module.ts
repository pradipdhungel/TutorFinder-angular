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
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SharedModule } from '@app/shared/shared.module';
import { ReservationRequestComponent } from './reservation-request/reservation-request.component';
import { TutorReservationsComponent } from './reservations/tutor-reservations.component';
import { TutorRequirementSearchComponent } from './jobs/jobs.component';
import { CreateTutorRequirementComponent } from './create-tutor-requirement/tutor-requirement.component';
import { ViewRequirementsComponent } from './components/view-requirements/view-requirements.component';


@NgModule({
  declarations: [
    HomePageComponent,
    ContactPageComponent,
    PublicPagesWrapperComponent,
    HomeNavbarComponent,
    JobSearchComponent,
    FooterComponent,
    CreateTutorRequirementComponent,
    TutorRequirementSearchComponent,
    ReservationRequestComponent,
    TutorReservationsComponent,
    ViewRequirementsComponent
  ],
  imports: [
    CommonModule,
    PublicPagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BsDropdownModule.forRoot()
  ]
})
export class PublicPagesModule { }
