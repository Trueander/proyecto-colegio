import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancesPiechartComponent } from './advances-piechart.component';

describe('AdvancesPiechartComponent', () => {
  let component: AdvancesPiechartComponent;
  let fixture: ComponentFixture<AdvancesPiechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancesPiechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancesPiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
