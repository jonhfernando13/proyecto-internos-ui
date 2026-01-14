import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternosComponent } from './internos.component';

describe('InternosComponent', () => {
  let component: InternosComponent;
  let fixture: ComponentFixture<InternosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
