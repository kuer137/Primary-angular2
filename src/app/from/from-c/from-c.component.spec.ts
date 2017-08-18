import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromCComponent } from './from-c.component';

describe('FromCComponent', () => {
  let component: FromCComponent;
  let fixture: ComponentFixture<FromCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
