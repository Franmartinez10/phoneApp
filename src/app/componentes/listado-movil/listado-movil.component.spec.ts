import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMovilComponent } from './listado-movil.component';

describe('ListadoMovilComponent', () => {
  let component: ListadoMovilComponent;
  let fixture: ComponentFixture<ListadoMovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoMovilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
