import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFromStoreComponent } from './order-from-store.component';

describe('OrderFromStoreComponent', () => {
  let component: OrderFromStoreComponent;
  let fixture: ComponentFixture<OrderFromStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderFromStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderFromStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
