import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangdataComponent } from './changdata.component';

describe('ChangdataComponent', () => {
  let component: ChangdataComponent;
  let fixture: ComponentFixture<ChangdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
