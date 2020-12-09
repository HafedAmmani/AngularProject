import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridcartComponent } from './gridcart.component';

describe('GridcartComponent', () => {
  let component: GridcartComponent;
  let fixture: ComponentFixture<GridcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
