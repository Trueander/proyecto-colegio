import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BimestreFormComponent } from './bimestre-form.component';

describe('BimestreFormComponent', () => {
  let component: BimestreFormComponent;
  let fixture: ComponentFixture<BimestreFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BimestreFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BimestreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
