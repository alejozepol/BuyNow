import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderProductSmComponent } from './order-product-sm.component';

describe('OrderProductSmComponent', () => {
  let component: OrderProductSmComponent;
  let fixture: ComponentFixture<OrderProductSmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderProductSmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderProductSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
