import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPhoneComponent } from './nuevo-phone.component';

describe('NuevoPhoneComponent', () => {
  let component: NuevoPhoneComponent;
  let fixture: ComponentFixture<NuevoPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
