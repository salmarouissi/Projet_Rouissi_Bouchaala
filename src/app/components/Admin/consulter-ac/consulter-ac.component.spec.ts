import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterAcComponent } from './consulter-ac.component';

describe('ConsulterAcComponent', () => {
  let component: ConsulterAcComponent;
  let fixture: ComponentFixture<ConsulterAcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsulterAcComponent]
    });
    fixture = TestBed.createComponent(ConsulterAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
