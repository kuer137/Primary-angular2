import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularlistComponent } from './angularlist.component';

describe('AngularlistComponent', () => {
  let component: AngularlistComponent;
  let fixture: ComponentFixture<AngularlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
