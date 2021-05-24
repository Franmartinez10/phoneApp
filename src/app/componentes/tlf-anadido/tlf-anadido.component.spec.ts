import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlfAnadidoComponent } from './tlf-anadido.component';

describe('TlfAnadidoComponent', () => {
  let component: TlfAnadidoComponent;
  let fixture: ComponentFixture<TlfAnadidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlfAnadidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlfAnadidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
