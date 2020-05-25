import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotEntreringComponent } from './page-not-entrering.component';

describe('PageNotEntreringComponent', () => {
  let component: PageNotEntreringComponent;
  let fixture: ComponentFixture<PageNotEntreringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotEntreringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotEntreringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
