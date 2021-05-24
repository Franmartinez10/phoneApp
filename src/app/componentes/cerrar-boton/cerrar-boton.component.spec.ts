import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerrarBotonComponent } from './cerrar-boton.component';

describe('CerrarBotonComponent', () => {
  let component: CerrarBotonComponent;
  let fixture: ComponentFixture<CerrarBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerrarBotonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CerrarBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
