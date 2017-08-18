import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromBComponent } from './from-b.component';

describe('FromBComponent', () => {
  let component: FromBComponent;
  let fixture: ComponentFixture<FromBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
