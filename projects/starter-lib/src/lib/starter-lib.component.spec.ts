import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterLibComponent } from './starter-lib.component';

describe('StarterLibComponent', () => {
  let component: StarterLibComponent;
  let fixture: ComponentFixture<StarterLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarterLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarterLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
