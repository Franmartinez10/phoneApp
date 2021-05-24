import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlfBorradoComponent } from './tlf-borrado.component';

describe('TlfBorradoComponent', () => {
  let component: TlfBorradoComponent;
  let fixture: ComponentFixture<TlfBorradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlfBorradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlfBorradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
