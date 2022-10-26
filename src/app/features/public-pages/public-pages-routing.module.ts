import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicPagesWrapperComponent } from './public-pages-wrapper.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { TutorRequirementsComponent } from './jobs/jobs.component';
import { TutorRequirementComponent } from './Tutor-Requirement-Page/tutor-requirement/tutor-requirement.component';
import { ReservationRequestComponent } from './reservation-request/reservation-request.component';
import { TutorReservationsComponent } from './reservations/tutor-reservations..component';
import { TutorRequirementSearchComponent } from './jobs/jobs.component';


const routes: Routes = [
  {
    path: '',
    component: PublicPagesWrapperComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
         pathMatch: 'full',
        data: {
          title: 'Home'
        },
      },
      {
        path: 'contact',
        component: ContactPageComponent,
        data: {
          title: 'Contact'
        }
      },

      {
        path: 'tutor-requirements-search',
        component: TutorRequirementSearchComponent,
        data: {
          title: 'Tutor Requirements'
        }
      },
      {
        path: 'tutor-requirement',
        component: TutorRequirementComponent,
        data: {
          title: 'Tutor Requirement'
        }
      }

      {
        path: 'reservation-request',
        component: ReservationRequestComponent,
        data: {
          title: 'Reservation Request'
        }
      },

      {
        path: 'tutor-reservations',
        component: TutorReservationsComponent,
        data: {
          title: 'Reservations'
        }
      },
    ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicPagesRoutingModule { }
