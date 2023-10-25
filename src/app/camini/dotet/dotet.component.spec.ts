import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotetComponent } from './dotet.component';

describe('DotetComponent', () => {
  let component: DotetComponent;
  let fixture: ComponentFixture<DotetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DotetComponent]
    });
    fixture = TestBed.createComponent(DotetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
