import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBaseComponent } from './angular-base.component';

describe('AngularBaseComponent', () => {
  let component: AngularBaseComponent;
  let fixture: ComponentFixture<AngularBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
