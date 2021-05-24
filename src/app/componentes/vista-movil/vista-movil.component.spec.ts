import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaMovilComponent } from './vista-movil.component';

describe('VistaMovilComponent', () => {
  let component: VistaMovilComponent;
  let fixture: ComponentFixture<VistaMovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaMovilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
