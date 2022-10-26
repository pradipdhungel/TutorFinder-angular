import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorRequirementSearchComponent } from './jobs.component';

describe('JobsComponent', () => {
  let component: TutorRequirementSearchComponent;
  let fixture: ComponentFixture<TutorRequirementSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorRequirementSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorRequirementSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
