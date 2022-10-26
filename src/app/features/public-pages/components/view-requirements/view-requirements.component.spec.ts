import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewRequirementsComponent } from './view-requirements.component';



describe('JobsComponent', () => {
  let component: ViewRequirementsComponent;
  let fixture: ComponentFixture<ViewRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRequirementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
