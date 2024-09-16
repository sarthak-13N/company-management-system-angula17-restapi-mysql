import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProjectDetailsComponent } from './show-project-details.component';

describe('ShowProjectDetailsComponent', () => {
  let component: ShowProjectDetailsComponent;
  let fixture: ComponentFixture<ShowProjectDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowProjectDetailsComponent]
    });
    fixture = TestBed.createComponent(ShowProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
