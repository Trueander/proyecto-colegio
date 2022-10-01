import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BimestresComponent } from './bimestres.component';

describe('BimestresComponent', () => {
  let component: BimestresComponent;
  let fixture: ComponentFixture<BimestresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BimestresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BimestresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
