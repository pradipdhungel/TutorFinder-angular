import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorRequirementComponent } from './tutor-requirement.component';

describe('TutorRequirementComponent', () => {
  let component: TutorRequirementComponent;
  let fixture: ComponentFixture<TutorRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorRequirementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
