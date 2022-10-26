import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicPagesWrapperComponent } from './public-pages-wrapper.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomeNavbarComponent } from './components/home-navbar/home-navbar.component';
import { PublicPagesRoutingModule } from './public-pages-routing.module';
import { FormsModule } from '@angular/forms';
import { JobSearchComponent } from './components/job-search/job-search.component';
import { FooterComponent } from './components/footer/footer.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ReservationRequestComponent } from './reservation-request/reservation-request.component';
import { TutorReservationsComponent } from './reservations/tutor-reservations..component';
import { TutorRequirementSearchComponent } from './jobs/jobs.component';


@NgModule({
  declarations: [
    HomePageComponent,
    ContactPageComponent,
    PublicPagesWrapperComponent,
    HomeNavbarComponent,
    JobSearchComponent,
    FooterComponent,
    TutorRequirementSearchComponent,
    ReservationRequestComponent,
    TutorReservationsComponent
  ],
  imports: [
    CommonModule,
    PublicPagesRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ]
})
export class PublicPagesModule { }
