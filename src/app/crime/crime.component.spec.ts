import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeComponent } from './crime.component';

describe('CrimeComponent', () => {
  let component: CrimeComponent;
  let fixture: ComponentFixture<CrimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrimeComponent]
    });
    fixture = TestBed.createComponent(CrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
