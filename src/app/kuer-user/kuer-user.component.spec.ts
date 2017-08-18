import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KuerUserComponent } from './kuer-user.component';



describe('KuerUserComponent', () => {
  let component: KuerUserComponent;
  let fixture: ComponentFixture<KuerUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuerUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
