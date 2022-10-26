import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservationRequestComponent } from './reservation-request.component';



describe('JobsComponent', () => {
  let component: ReservationRequestComponent;
  let fixture: ComponentFixture<ReservationRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
