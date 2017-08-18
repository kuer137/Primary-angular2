import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromListComponent } from './from-list.component';

describe('FromAComponent', () => {
  let component: FromListComponent;
  let fixture: ComponentFixture<FromListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
