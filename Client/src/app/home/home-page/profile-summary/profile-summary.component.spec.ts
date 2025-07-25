import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSummaryComponent } from './profile-summary.component';

describe('HomeComponent', () => {
  let component: ProfileSummaryComponent;
  let fixture: ComponentFixture<ProfileSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
