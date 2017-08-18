import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromAComponent } from './from-a.component';

describe('FromAComponent', () => {
  let component: FromAComponent;
  let fixture: ComponentFixture<FromAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
