import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InternoFormComponent } from './interno-form.component'; // 👈 Nombre correcto
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

describe('InternoFormComponent', () => {
  let component: InternoFormComponent;
  let fixture: ComponentFixture<InternoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Al ser standalone, debe ir en imports, NO en declarations
      imports: [InternoFormComponent, ReactiveFormsModule],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(InternoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});