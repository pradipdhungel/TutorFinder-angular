import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorRequirementsComponent } from './jobs.component';

describe('JobsComponent', () => {
  let component: TutorRequirementsComponent;
  let fixture: ComponentFixture<TutorRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorRequirementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
