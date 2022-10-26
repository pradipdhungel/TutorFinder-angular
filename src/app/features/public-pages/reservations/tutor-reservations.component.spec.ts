import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TutorReservationsComponent } from './tutor-reservations..component';



describe('JobsComponent', () => {
  let component: TutorReservationsComponent;
  let fixture: ComponentFixture<TutorReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorReservationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
