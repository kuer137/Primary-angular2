import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromtextComponent } from './fromtext.component';

describe('FromtextComponent', () => {
  let component: FromtextComponent;
  let fixture: ComponentFixture<FromtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromtextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
