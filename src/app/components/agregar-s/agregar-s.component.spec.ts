import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSComponent } from './agregar-s.component';

describe('AgregarSComponent', () => {
  let component: AgregarSComponent;
  let fixture: ComponentFixture<AgregarSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
