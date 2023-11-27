import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilUserComponent } from './acceuil-user.component';

describe('AcceuilUserComponent', () => {
  let component: AcceuilUserComponent;
  let fixture: ComponentFixture<AcceuilUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceuilUserComponent]
    });
    fixture = TestBed.createComponent(AcceuilUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
