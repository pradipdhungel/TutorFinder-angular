import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTutorRequirementComponent } from './tutor-requirement.component';

describe('TutorRequirementComponent', () => {
  let component: CreateTutorRequirementComponent;
  let fixture: ComponentFixture<CreateTutorRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTutorRequirementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTutorRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
