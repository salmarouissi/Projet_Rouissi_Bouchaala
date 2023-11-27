import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionAdminComponent } from './action-admin.component';

describe('ActionAdminComponent', () => {
  let component: ActionAdminComponent;
  let fixture: ComponentFixture<ActionAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionAdminComponent]
    });
    fixture = TestBed.createComponent(ActionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
